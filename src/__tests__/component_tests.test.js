import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const d = {
    id: 'root',
    name: 'Parent',
    text: '',
    children: [
        {
            id: '1',
            name: 'Child - 1',
            text: '',
        },
        {
            id: '3',
            name: 'Child - 3',
            text: 'TEXT_CH3',
            children: [
                {
                    id: '4',
                    name: 'Child - 4',
                    text: '',
                },
            ],
        },
    ],
}
const findPath = (ob, key, value) => {
    const path = []
    const keyExists = (obj) => {
        if (!obj || (typeof obj !== 'object' && !Array.isArray(obj))) {
            return false
        } else if (obj.hasOwnProperty(key) && obj[key] === value) {
            return true
        } else if (Array.isArray(obj)) {
            let parentKey = path.length ? path.pop() : ''

            for (let i = 0; i < obj.length; i++) {
                path.push(`${parentKey}[${i}]`)
                const result = keyExists(obj[i], key)
                if (result) {
                    return result
                }
                path.pop()
            }
        } else {
            for (const k in obj) {
                path.push(k)
                const result = keyExists(obj[k], key)
                if (result) {
                    return result
                }
                path.pop()
            }
        }

        return false
    }

    keyExists(ob)

    return path.join('.')
}
var _ = require('lodash')

describe('list of component testss', () => {
    test('filepath test', () => {
        const x = findPath(d, 'id', '3')
        expect(x).toBe('children[1]')
    })
})
