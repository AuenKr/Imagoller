export default function acessKey() {
    const acessKeys = [`Me2HeskTDeXxLnNRTg3jRFfHT7p9dYxm0CE5j6Bik_4`, `2jVS7T2AQHvoUSmqnRrMcd-5pRxQmwQyAb5WVNhe1Sc`, `891bb11653baa0ee566d6721f4113e4c91d4d93efccf84ca3ee292c47a9f2625`, `r1zplx0mNKePUYxLjxnv7LYsEmy_D9GIJ0vsN2qilI8`, `190dadb72657f630596b3b6daea32055c05c3326948586d20bb2a9654ece5d36`];
    const keyId = Math.floor(Math.random() * acessKey.length) + 1;
    return acessKeys[keyId];
}