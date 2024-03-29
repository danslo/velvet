# Velvet

Velvet is an administration backend for [Magento 2](https://github.com/magento/magento2) websites.

There are many options for running a Magento storefront headlessly, such
as [Daffodil](https://github.com/graycoreio/daffodil), [PWA Studio](https://github.com/magento/pwa-studio)
and [Vue Storefront](https://github.com/vuestorefront/vue-storefront).

No such solution currently exists to replace the traditional Magento administrative backend. That's where Velvet comes
in. It is the missing piece to run Magento completely headless.

Velvet is built with modern web technologies such as React, Typescript, GraphQL and MUI.

**DISCLAIMER: Velvet is still in heavy development, with many features missing. It is not production-ready.**

## Installation

1. Make sure that the following extensions are installed on your M2 instance:
    - The [m2-module-velvet](https://github.com/danslo/m2-module-velvet) metapackage.
2. Run the GraphQL code generator: `REACT_APP_BACKEND_URL="https://magento24.test/graphql" yarn codegen`
3. Start the application: `REACT_APP_BACKEND_URL="https://magento24.test/graphql" yarn start`
4. Visit http://localhost:3000/

## Screenshot

<img src="https://i.imgur.com/NY5vBzx.png" width="100%" />

## License

Copyright 2021 Daniel Sloof

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
