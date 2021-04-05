
import Image from './../../common/Image/Image';

type Props = {
    productItemName: string,
    images: string[],
    handleImageThumbClick(image: string): void
}

const ImageThumbs: React.FC<Props> = ({ productItemName, images, handleImageThumbClick }) => {

    return (
        <span className="image-thumbs">
            {
                images.map((image, index) => {
                    return <label key={image} className="image-label">
                        {
                            (index === 0) ? (
                                <input className="image-radio" type="radio" name="image-radio" id={image} defaultChecked />
                            ) : (
                                <input className="image-radio" type="radio" name="image-radio" id={image} />
                            )
                        }
                        <div className="image-placeholder" onClick={() => handleImageThumbClick(image)} >
                            <Image image={image} imageClass="image-thumb" productItemName={productItemName} />
                        </div>

                    </label>
                })
            }
        </span>
    );
}

export default ImageThumbs;