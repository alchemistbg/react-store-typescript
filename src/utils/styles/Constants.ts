
export const CONTENT_WIDTHS = {
    mainContent_Width_Default: '64vw',
    mainContent_Width_Medium: '74vw',
    mainContent_Width_Small: '92vw',
    componentWidth_Default: '32%',
    componentWidth_Medium: '48%',
    componentWidth_Small: '100%',
}

export const COLORS = {
    //Colors in Header and Footer
    navigation_Text_Default: 'rgb(255, 255, 255)',
    navigation_Text_Highlighted: 'rgb(133, 32, 0)',
    navigation_Background: 'rgb(15, 76, 129)',
    navigation_Background_Alpha: 'rgba(15, 76, 129, 0.5)',
    //Colors in main
    main_Text_Default: 'rgb(15, 76, 129)',
    main_Text_Default_Alpha: 'rgba(15, 76, 129, 0.5)',
    main_Text_Highlighted: 'rgb(133, 32, 0)',
    main_Text_Reversed: 'rgb(255, 255, 255)',
    main_Background_Main: 'rgb(255, 255, 255)',
    main_Background_Highlighted: 'rgb(133, 32, 0)',
    main_Background_Reversed: 'rgb(15, 76, 129)',
    main_Background_Reversed_Alpha25: 'rgba(15, 76, 129, 0.25)',
    main_Background_Reversed_Alpha50: 'rgba(15, 76, 129, 0.50)',
    //Color in outlines
    outlineBorderMain: 'rgb(15, 76, 129)',
    outlineAlternative: 'rgb(133, 32, 0)',
    //Colors in borders
    borderMain: 'rgb(15, 76, 129)',
    ButtonDefault: 'rgb(15, 76, 129)',
    ButtonDisabled_Alpha25: 'rgba(15, 76, 129, 0.25)',
    ButtonDisabled_Alpha50: 'rgba(15, 76, 129, 0.50)',
}

export const FONTS = {
    fontFamilyHeaders: 'Ubuntu',
    fontFamilyBody: 'Open Sans',
    fontSizeBodyNormal: '12px',
    fontSizeBodyLarge: '14px',
    fontSizeBodyLARGE: '16px',
    fontSizeBodyHuge: '18px',
}

const SCREEN_SIZE = {
    mobileS: '300px',
    mobileM: '450px',
    mobileL: '600px',
    tablet: '768px',
    laptopS: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktopS: '1600px',
    desktopL: '2560px'
}

export const DEVICE_MIN_WIDTH = {
    mobileS: `(min-width: ${SCREEN_SIZE.mobileS})`,
    mobileM: `(min-width: ${SCREEN_SIZE.mobileM})`,
    mobileL: `(min-width: ${SCREEN_SIZE.mobileL})`,
    tablet: `(min-width: ${SCREEN_SIZE.tablet})`,
    laptopS: `(min-width: ${SCREEN_SIZE.laptopS})`,
    laptopM: `(min-width: ${SCREEN_SIZE.laptopM})`,
    laptopL: `(min-width: ${SCREEN_SIZE.laptopL})`,
    desktopS: `(min-width: ${SCREEN_SIZE.desktopS})`,
    desktopL: `(min-width: ${SCREEN_SIZE.desktopL})`
};

export const DEVICE_MAX_WIDTH = {
    mobileS: `(max-width: ${SCREEN_SIZE.mobileS})`,
    mobileM: `(max-width: ${SCREEN_SIZE.mobileM})`,
    mobileL: `(max-width: ${SCREEN_SIZE.mobileL})`,
    tablet: `(max-width: ${SCREEN_SIZE.tablet})`,
    laptopS: `(max-width: ${SCREEN_SIZE.laptopS})`,
    laptopM: `(max-width: ${SCREEN_SIZE.laptopM})`,
    laptopL: `(max-width: ${SCREEN_SIZE.laptopL})`,
    desktopS: `(max-width: ${SCREEN_SIZE.desktopS})`,
    desktopL: `(max-width: ${SCREEN_SIZE.desktopL})`
};

export const SHADOWS = {
    shadowColorLight: 'rgba(15, 76, 129, 0.25)',
    shadowColorDark: 'rgba(15, 76, 129, 0.75',
    shadowShapeMain: '0px 0px 5px 2px',
}

export const TIMES = {
    timeTransitionMain: '0.2s',
}