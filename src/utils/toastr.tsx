
import * as toastr from 'toastr';
import IToastOptions from './interfaces/IToastrOptions';

import './../../node_modules/toastr/build/toastr.css';

const toastOptions: IToastOptions = {
    closeButton: true,
    newestOnTop: false,
    timeOut: 1000,
    progressBar: true,
    // positionClass: "toast-top-right",
}

type toastData = {
    title: string,
    message: string
}

const showToast = (toastType: string, toastData: { title: string, message: string }) => {
    toastr.remove();

    if (toastType === 'success') {
        toastr[toastType](toastData.message, toastData.title, toastOptions);
    }

    if (toastType === 'simpleError') {
        toastr['error'](toastData.message, toastData.title, toastOptions);
        return;
    }

    //TODO!!!
    // Object.keys(toastData).forEach((key) => {
    //     if (toastData[].length > 0) {
    //         toastr[toastType](toastData[key].join('\n'), `Invalid ${key}`, toastOptions);
    //     }
    // });
}

export default showToast;