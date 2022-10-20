require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(30_000);

    it("should find Printed Summer Dress", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try{
            await driver.get("http://automationpractice.com/index.php");
            const search = await driver.findElement(By.id("search_query_top"));
            await search.sendKeys("dress");
            await search.sendKeys(Key.ENTER);
            await (await driver.findElement(By.name("submit_search"))).click();
            const result = await driver.findElement(By.css("#best-sellers_block_right > div > ul > li:nth-child(1) > div > h5 > a"));
            expect(await result.getText()).to.equal("Printed Chiffon Dress");
        } finally {
            await driver.quit();
        }
    })
})