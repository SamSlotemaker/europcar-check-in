const veriff = Veriff({
    host: 'https://stationapi.veriff.com',
    apiKey: '02dfbf41-b5c9-4411-8e17-5d44332046a8',
    parentId: 'veriff-root',
    onSession: function (err, response) {
        window.veriffSDK.createVeriffFrame({ url: response.verification.url });
    }
});
veriff.setParams({
    person: {
        givenName: ' ',
        lastName: ' '
    },
    vendorData: ' '
});
veriff.mount();