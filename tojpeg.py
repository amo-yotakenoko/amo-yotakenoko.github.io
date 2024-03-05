from PIL import Image
import os

def convert_png_to_jpeg(file_path):
    try:
        # PNG画像を開く
        img = Image.open(file_path)
        # 新しいファイル名を作成し、拡張子を .jpeg に変更
        new_file_path = os.path.splitext(file_path)[0] + '.jpeg'
        # 画像を JPEG 形式で保存
        img.convert('RGB').save(new_file_path, 'JPEG')
        print(f"Converted: {file_path} -> {new_file_path}")
    except Exception as e:
        print(f"Error converting {file_path}: {str(e)}")

def convert_png_files_to_jpeg(directory):
    # ディレクトリ内のすべての要素を取得
    for root, directories, files in os.walk(directory):
        for filename in files:
            # ファイルのパスを取得
            file_path = os.path.join(root, filename)
            # 拡張子が .jpeg の場合にのみ変換を実行
            if file_path.lower().endswith('.jpeg'):
                convert_png_to_jpeg(file_path)

# ファイルを取得するディレクトリのパスを指定
directory_path = './'
convert_png_files_to_jpeg(directory_path)