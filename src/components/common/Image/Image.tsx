import { SyntheticEvent } from 'react';
import { ProductItemType } from '../../../utils/types';
import { miscConstants } from './../../../utils/miscConstants';

type Props = {
    image: string;
    imageClass: string;
    productItemName: string;
}

const Image: React.FC<Props> = ({ image, imageClass, productItemName }) => {

    const handleImageLoadError = (evt: SyntheticEvent<HTMLImageElement, Event>) => {
        // evt.currentTarget.src = `${miscConstants.basicUrl}/static/images/error.png`;
        evt.currentTarget.src = `/static/images/error.png`;
    }

    return <span className={imageClass}>
        <img
            // src={`${miscConstants.basicUrl}/static/images/` + image}
            src={`/static/images/` + image}
            alt={`${productItemName}`}
            onError={handleImageLoadError}

        />

    </span>
}

export default Image;