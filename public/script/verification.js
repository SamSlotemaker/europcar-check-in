const veriff = Veriff({
    host: 'https://stationapi.veriff.com',
    apiKey: '02dfbf41-b5c9-4411-8e17-5d44332046a8',
    parentId: 'veriff-root',
    onSession: function (err, response) {
        console.log(response.verification.url)
        window.veriffSDK.createVeriffFrame({ url: response.verification.url });
    },
});
console.log(veriff)
veriff.setParams({
    person: {
        givenName: ' ',
        lastName: ' '
    },
    vendorData: ' '
});
veriff.mount({
    submitBtnText: 'Verifieer jezelf',
    loadingText: 'Aan het laden...'
});