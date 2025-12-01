import os
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener
register_heif_opener()

# --- 設定 ---
SOURCE_DIR = "./other"
TARGET_DIR = "../public/other"
TARGET_WIDTH = int(480/2)   # 最終的なターゲット幅
TARGET_HEIGHT = int(270/2)  # 最終的なターゲット高さ
SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.jfif', '.png',".HEIC",".heic"]
# ------------

def resize_and_crop(img, target_width, target_height):
    """
    画像をターゲットサイズに合わせるようにリサイズし、中央をクリッピングする。
    """
    # ターゲットのアスペクト比
    target_ratio = target_width / target_height
    # 元の画像のアスペクト比
    img_ratio = img.width / img.height

    # リサイズ後のサイズを計算するための変数
    new_width = target_width
    new_height = target_height

    # 1. ターゲットサイズを隙間なく埋めるようにリサイズする
    if img_ratio > target_ratio:
        # 元画像がターゲットより横長の場合: 高さをターゲットに合わせる
        new_height = target_height
        new_width = int(new_height * img_ratio)
    else:
        # 元画像がターゲットより縦長の場合: 幅をターゲットに合わせる
        new_width = target_width
        new_height = int(new_width / img_ratio)

    # 2. 高品質なリサイズを実行 (LANCZOSフィルタを使用)
    resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

    # 3. 中央をクリッピング（切り取り）
    # 左上隅の座標を計算
    left = (new_width - target_width) / 2
    top = (new_height - target_height) / 2
    # 右下隅の座標を計算
    right = (new_width + target_width) / 2
    bottom = (new_height + target_height) / 2

    # 計算した座標で画像を切り取る
    cropped_img = resized_img.crop((left, top, right, bottom))
    
    return cropped_img

def convert_images_to_webp_with_crop():
    """メイン処理を実行する関数"""
    print(f"--- 画像変換処理を開始します (ターゲット: {TARGET_WIDTH}x{TARGET_HEIGHT}) ---")

    if not os.path.exists(TARGET_DIR):
        os.makedirs(TARGET_DIR)

    processed_count = 0
    
    for i,filename in enumerate(os.listdir(SOURCE_DIR)):
        file_path = os.path.join(SOURCE_DIR, filename)
        file_name_without_ext, file_ext = os.path.splitext(filename)
        file_ext = file_ext.lower()

        if file_ext in SUPPORTED_EXTENSIONS and os.path.isfile(file_path):
            try:
                img = Image.open(file_path)
                img = ImageOps.exif_transpose(img)
                
                # 縦横比を保ち、クリッピングを行うリサイズ処理
                final_img = resize_and_crop(img, TARGET_WIDTH, TARGET_HEIGHT)
                
                # WebPとして保存
                output_filename = f"{i}.webp"
                output_path = os.path.join(TARGET_DIR, output_filename)
                
                final_img.save(output_path, 'webp', quality=50)
                
                print(f"✅ 変換成功: {filename} -> {output_filename}")
                processed_count += 1
                
            except Exception as e:
                print(f"❌ 変換失敗: {filename} - エラー: {e}")

    print(f"--- 処理が完了しました。変換されたファイル数: {processed_count} ---")


if __name__ == "__main__":
    convert_images_to_webp_with_crop()