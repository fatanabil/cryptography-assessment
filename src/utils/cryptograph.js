class Cryptograph {
    static #char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@', '#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    static #rand_symbols = ['!', '-', '|', '=', '$', '%', '^', '&', '*', '+', '?', '~', '>', '<'];

    static encrypt(plain_text, key) {
        if (key instanceof Error) {
            console.error(key)
            return
        } else if (key.length > Cryptograph.#char.length) {
            return new Error("Key length too long")
        }

        let char = Cryptograph.#char.slice(0)
        let cypher_char = Cryptograph.#char.slice(0)
        let rand_symbols = Cryptograph.#rand_symbols.slice(0)

        // setcypherchar
        for (let i = 0; i < key.length; i++) {
            for (let j = 0; j < char.length; j++) {
                if (key[i] === cypher_char[j]) {
                    let temp = cypher_char[i]
                    cypher_char[i] = cypher_char[j]
                    cypher_char[j] = temp
                }
            }
        }

        let encrypted_text = []
        for (let i = 0; i < plain_text.length; i++) {
            for (let j = 0; j < cypher_char.length; j++) {
                if (plain_text[i] === char[j]) {
                    encrypted_text.push(cypher_char[j])
                } else if (plain_text[i] === " ") {
                    encrypted_text.push(rand_symbols[Math.round(Math.random() * ((rand_symbols.length - 1) - 0) - 0)])
                    break;
                }
            }
        }

        return encrypted_text.join("")
    }

    static decrypt(cypher_text, key) {
        if (key instanceof Error) {
            console.error(key)
            return
        } else if (key.length > Cryptograph.#char.length) {
            throw new Error("Key length too long")
        }

        let char = Cryptograph.#char.slice(0)
        let cypher_char = Cryptograph.#char.slice(0)
        let rand_symbols = Cryptograph.#rand_symbols.slice(0)

        // set cypher char
        for (let i = 0; i < key.length; i++) {
            for (let j = 0; j < cypher_char.length; j++) {
                if (key[i] === cypher_char[j]) {
                    let temp = cypher_char[i]
                    cypher_char[i] = cypher_char[j]
                    cypher_char[j] = temp
                }
            }
        }

        let decrypted_text = []
        for (let i = 0; i < cypher_text.length; i++) {
            for (let j = 0; j < char.length; j++) {
                if (rand_symbols.includes(cypher_text[i])) {
                    decrypted_text.push(" ")
                    break;
                } else if (cypher_text[i] === cypher_char[j]) {
                    decrypted_text.push(char[j])
                }
            }
        }
        return decrypted_text.join("")
    }

    static createKey(length = 32) {
        if (length > Cryptograph.#char.length) {
            throw new Error("Key length too long")
        }

        let char = Cryptograph.#char.slice(0)

        // shuffle arr
        let currentIndex = char.length
        let randomIndex = 0

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [char[currentIndex], char[randomIndex]] = [char[randomIndex], char[currentIndex]]
        }

        let key = []
        for (let i = 0; i < length; i++) {
            key.push(char[i])
        }
        return key.join("")
    }
}

export default Cryptograph;