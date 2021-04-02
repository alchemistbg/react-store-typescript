import ButtonWrapper from './Button.styles';

type Props = {
    dataTestId: string;
    isDisabled: boolean;
    className: string;
    // onClick
    btnText: string;
    icon: string;
}

const Button: React.FC<Props> = ({ dataTestId = "", isDisabled, className, btnText, icon = "" }) => {
    return <ButtonWrapper>
        <button
            data-testid={dataTestId}
            disabled={isDisabled}
            className={className}
        //function
        >
            {icon}{btnText}
        </button>
    </ButtonWrapper>
}

export default Button;