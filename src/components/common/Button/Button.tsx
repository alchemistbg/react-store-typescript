import ButtonWrapper from './Button.styles';

type Props = {
    dataTestId: string;
    isDisabled: boolean;
    className: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    btnText: string;
    icon: string;
}

const Button: React.FC<Props> = ({ dataTestId = "", isDisabled, className, onClick, btnText, icon = "" }) => {
    return <ButtonWrapper>
        <button
            data-testid={dataTestId}
            disabled={isDisabled}
            className={className}
            onClick={onClick}
        >
            {icon}{btnText}
        </button>
    </ButtonWrapper>
}

export default Button;