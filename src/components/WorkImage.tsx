import './WorkImage.css';

type Props = {
  imageUrl: string;
  isSampleImage?: boolean;
};

export function WorkImage({ imageUrl, isSampleImage }: Props) {
  return (
    <div className={isSampleImage ? 'work-img-wrap sample-image' : 'work-img-wrap'}>
      <img alt="work画像" src={imageUrl} />
      <p className="sample-image-text">sample image</p>
    </div>
  );
}
