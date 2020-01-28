Package.describe({
  name: 'kristoferjoseph:flexboxgrid',
  version: '1.0.0',
  summary: 'Grid based off of CSS3 flexbox specification',
  git: 'https://github.com/ftc-development/ftc-flexboxgrid',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.8');
  api.use('ecmascript');
  api.addFiles('dist/flexboxgrid.css');
});
