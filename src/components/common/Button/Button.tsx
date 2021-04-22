import ButtonWrapper from './Button.styles';

type Props = {
    dataTestId: string;
    isDisabled: boolean;
    className: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    btnText: string;
    btnIcon: string;
}

const Button: React.FC<Props> = ({ dataTestId = "", isDisabled, className, onClick, btnText, btnIcon = "" }) => {
    return <ButtonWrapper
        data-testid={dataTestId}
        disabled={isDisabled}
        className={className}
        onClick={onClick}
    // btnIcon={btnIcon}
    // btnText={btnText}
    >
        {/* <button
            data-testid={dataTestId}
            disabled={isDisabled}
            className={className}
            onClick={onClick}
        >
    </button> */}
        {btnIcon}{btnText}
    </ButtonWrapper>
}

export default Button;