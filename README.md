# Abur.io website

This repository contains the source code of my personal static website built with Webpack 5 and Bootstrap 4.4.

## Dependencies

* [Bootstrap 4.4](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Front-end framework
* [Webpack 5](https://webpack.js.org/) - Static module bundler

## Features

* Front-end
  * Bootstrap CSS compiled with [Responsive Font Size](https://getbootstrap.com/docs/4.4/content/typography/#responsive-font-sizes) enabled
  * Lazy loading images & videos using [Lozad JS](https://apoorv.pro/lozad.js/)

* Back-end
  * Serverless contact form built with [AWS Lambda](https://aws.amazon.com/fr/lambda/features/) & [Amazon SES](https://aws.amazon.com/fr/ses/)
  * Spam/bot protection using [Google Recaptcha V3](https://developers.google.com/recaptcha/docs/v3)

* Analytics
  * General stats using [Google Analytics](https://analytics.google.com/analytics/web/)

## Hosting

Automatic deployment of the master branch to [www.abur.io](https://www.abur.io) using [AWS Amplify](https://aws.amazon.com/fr/amplify/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* A special thanks goes to [Clement Aceituno](https://github.com/clementAC) (my business partner) for the initiation to the AWS Amplify
