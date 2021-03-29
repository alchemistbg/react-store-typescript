
export const CONTENT_WIDTHS = {
    mainContent_Width_Default: '60vw',
    mainContent_Width_Medium: '75vw',
    mainContent_Width_Small: '90vw',
}

export const COLORS = {
    //Colors in Header and Footer
    navigation_Text_Default: '#ffffff',
    navigation_Text_Highlighted: '#852000',
    navigation_Background: '#0f4c81',
    //COlors in main
    main_Text_Default: '#0f4c81',
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
    shadowShapeMain: '0px 0px 5px 2px',
}