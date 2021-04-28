import { SyntheticEvent } from 'react';
import IImageProps from './../../../utils/interfaces/Props/IImageProps';
import { miscConstants } from './../../../utils/miscConstants';

const Image: React.FC<IImageProps> = ({ image, imageClass, productItemName }) => {

    const handleImageLoadError = (evt: SyntheticEvent<HTMLImageElement, Event>) => {
        // evt.currentTarget.src = `/static/images/error.png`;
        evt.currentTarget.src = `${miscConstants.baseUrl}/static/images/error.png`;
    }

    return <span className={imageClass}>
        <img
            // src={`/static/images/` + image}
            src={`${miscConstants.baseUrl}/static/images/` + image}
            alt={`${productItemName}`}
            onError={handleImageLoadError}

        />

    </span>
}

export default Image;