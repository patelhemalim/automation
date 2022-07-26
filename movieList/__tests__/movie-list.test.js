const { Builder, Capabilities } = require("selenium-webdriver")
const {addMovie}=require('../addMovie.js')
const {crossOffMovie}=require('../addMovie.js')
const {deleteMovie}=require('../addMovie.js')
require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async()=>{
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()})

test('add a movie',async()=>{
    await addMovie(driver)
    await driver.sleep(5000)
})

test('cross of movie',async()=>{
    await crossOffMovie(driver)
    await driver.sleep(5000)
})

test('deleteMovie',async()=>{
    await deleteMovie(driver)
    await driver.sleep(5000)
})