export default function acessKey() {
    const acessKey1 = import.meta.env.VITE_API_KEY1;
    const acessKey2 = import.meta.env.VITE_API_KEY2;
    const acessKey3 = import.meta.env.VITE_API_KEY3;
    const acessKey4 = import.meta.env.VITE_API_KEY4;
    const acessKey5 = import.meta.env.VITE_API_KEY5;

    const acessKeys = [acessKey1, acessKey2, acessKey3, acessKey4, acessKey5];
    const keyId = Math.floor(Math.random() * acessKey.length) + 1;
    return acessKeys[keyId];
}