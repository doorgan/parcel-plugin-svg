const { Asset } = require('parcel-bundler');

class SvgAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }

  generate() {
    const parts = [
      {
        type: 'js',
        value: `module.exports = \`${this.contents}\``
      }
    ];

    return parts;
  }
}

module.exports = SvgAsset;