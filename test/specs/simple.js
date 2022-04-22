describe('Final Project', () => {

    it('additional interview test case', async () => {
        await browser.url('https://github.com/');
        await browser.pause(2000);
        const text =  await $('.mx-0 > h2');
        await text.scrollIntoView();
        await browser.pause(2000);
        console.log("Is text displayed? " + await text.isDisplayed());
    })

})