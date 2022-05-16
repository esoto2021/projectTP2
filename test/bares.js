const { expect } = require("chai")
const Server = require('../server')

describe('Bares', () => {
    describe('#rutasBasicas', () => {

        it('this turn ON', async () => {

            const response = await Server.get() //mi componente

            expect(response.status).to.equal(200) // OK - exitosa
        })

        //Chequeo que /bares me devuelva un 200
        it('this get bares', async () => {

            const bares = await Server.getBares()

            expect(bares.status).to.equal(200)

        })

    })
})

