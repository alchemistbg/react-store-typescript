
import SizeWrapper from './Size.styles';

type Props = {
    sizes: string[];
    handleSizeSelection(size: string): void;
}

const Size: React.FC<Props> = ({ sizes, handleSizeSelection }) => {
    return <SizeWrapper>
        <h6 className="size-list-title">This product is available in:</h6>
        <div className="size-label-list">
            {
                sizes.map((size) => {
                    return <label htmlFor="size-radio" key={size} className="size-label" id={size} onClick={() => handleSizeSelection(size)}>
                        <input className="size-radio" name="size-radio"></input>
                        <span className="size-item">{size}</span>
                    </label>
                })
            }
        </div>
        <div id="size-warning">Please select a size!</div>
    </SizeWrapper>
}

export default Size;