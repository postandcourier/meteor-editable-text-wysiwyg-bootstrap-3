Package.describe({
  name: 'postandcourier:editable-text-wysiwyg-semantic-ui',
  summary: 'Extends the babrahams:editable-text package to include a wysiwyg editor that uses Semantic UI',
  version: '0.1.0',
  git: 'https://github.com/postandcourier/meteor-editable-text-wysiwyg-bootstrap-3.git'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0');
  
  api.use('babrahams:editable-text@0.8.10', ['client','server']);
  api.imply('babrahams:editable-text');
  api.use('babrahams:editable-text-wysiwyg@0.5.10', 'client');
  api.use('templating', 'client');
  api.use('blaze', 'client');
  api.use('spacebars', 'client');
  api.use('jquery', 'client');
  api.use(['twbs:bootstrap-noglyph@3.3.1','twbs:bootstrap@3.3.1', 'nemo64:bootstrap@3.3.1_1'], 'client', {weak: true});
  api.use('fortawesome:fontawesome@4.4.0', 'client', {weak: true});
  
  api.add_files('lib/editable_text_wysiwyg_bootstrap_3.css', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_3.html', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_3.js', 'client');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:editable-text-wysiwyg');
  api.addFiles('editable-text-wysiwyg-tests.js');
});