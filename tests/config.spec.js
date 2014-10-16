'use strict';

/* global describe, it, after */


var assert = require('chai').assert,
    configrc = require('../'),
    fs = require('fs');



describe('#config', function () {

  // Fixture data
  var login = 'olivier',
      password = '123456',
      inventory = { bullets: 60, grenades: 5 };


  it('should store config values', function () {
    var myconf = configrc.make('my-app');

    myconf.set('login', login);
    myconf.set('password', password);

    after(function () {
      myconf.destroy();
    });
  });

  
  it('should retrieve values', function () {
    var storedConf = configrc.make('my-app');

    assert.strictEqual(storedConf.get('login'), login);
    assert.strictEqual(storedConf.get('password'), password);
  });


  it('shouldn\'t be externally mutable', function () {
    var myconf = configrc.make('my-app-2');

    after(function () {
      myconf.destroy();
    });

    myconf.set('inventory', inventory);

    assert.deepEqual(
      myconf.get('inventory'),
      inventory
    );

    var storedInventory = myconf.get('inventory');
    storedInventory.bullets = 100;

    assert.notStrictEqual(
      myconf.get('inventory').bullets, 
      storedInventory.bullets
    );
  });

});
