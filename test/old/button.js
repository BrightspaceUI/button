(function( $ ) {

	'use strict';

	module( 'Layout' );

	var setFont = function( family, size ) {

			$('body')
				.css( 'font-family', family )
				.css( 'font-size', size );

		};

	var assertHeights = function(expected) {

		var first = null;

		for (var i = 0; i < layoutButtons.length; i++) {
			var h = $('#' + layoutButtons[i]).outerHeight(true);
			var diff = Math.abs(h - expected);
			first = first || h;
			equal(h, first, 'same:' + layoutButtons[i]);
			ok(diff < 3, 'diff:' + layoutButtons[i] + ',' + h);
		}

	};

	var layoutButtons = [
			'anchor',
			'anchor_disabled',
			'anchor_icon_disabled',
			'anchor_icon_text_notitle',
			'anchor_icon_notext_notitle',
			'button',
			'button_disabled',
			'button_icon_disabled',
			'button_icon_text_notitle',
			'button_icon_notext_notitle',
			'input',
			'input_disabled'
		];

	test( 'OuterHeight_AllButtons_28', function() {

		for( var i = 0; i < layoutButtons.length; i++ ) {

			var id = layoutButtons[i];
			var $b = $( '#' + id );

			var outerHeight = $b.outerHeight( false );

			equal( outerHeight, 28, 'outer height:' + outerHeight + ',' + id );

		}

	} );

	test( 'OuterHeightWithMargins_AllButtons_28', function() {

		for( var i = 0; i < layoutButtons.length; i++ ) {

			var id = layoutButtons[i];
			var $b = $( '#' + id );

			var outerHeightWithMargins = $b.outerHeight( true );

			equal( outerHeightWithMargins, 28, 'outer height with margins:' + outerHeightWithMargins + ',' + id );

		}

	} );

	test( 'InnerHeight_AllButtons_26', function() {

		for( var i = 0; i < layoutButtons.length; i++ ) {

			var id = layoutButtons[i];
			var $b = $( '#' + id );

			var innerHeight = $b.innerHeight();

			equal( innerHeight, 26, 'inner height:' + innerHeight + ',' + id );

		}

	} );

	module( 
			'Heights',
			{ teardown: function() { setFont( 'Arial', '13px' ); } }
		);

	test( 'Height_Arial11_28', function() {

		setFont( 'Arial', '11px' );
		assertHeights( 28 );

	});

	test( 'Height_Arial13_28', function() {

		setFont( 'Arial', '13px' );
		assertHeights( 28 );

	});

	test( 'Height_Arial15_29', function() {

		setFont( 'Arial', '15px' );
		assertHeights( 29 );

	});

	test( 'Height_Arial17_32', function() {

		setFont( 'Arial', '17px' );
		assertHeights( 32 );

	});

	test( 'Height_Verdana11_28', function() {

		setFont( 'Verdana', '11px' );
		assertHeights( 28 );

	});

	test( 'Height_Verdana13_28', function() {

		setFont( 'Verdana', '13px' );
		assertHeights( 28 );

	});

	test( 'Height_Verdana15_30', function() {

		setFont( 'Verdana', '15px' );
		assertHeights( 30 );

	});

	test( 'Height_Verdana17_33', function() {

		setFont( 'Verdana', '17px' );
		assertHeights( 33 );

	});

	module( 'Enabledness' );

	test( 'IsEnabled_AnchorNoValue_True', function() {

		var $b = $( '#anchor' );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

	} );

	test( 'IsEnabled_AnchorDisabled_False', function() {

		var $b = $( '#anchor_disabled' );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

	} );

	test( 'IsEnabled_ButtonNoValue_True', function() {

		var $b = $( '#button' );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

	} );

	test( 'IsEnabled_ButtonDisabled_False', function() {

		var $b = $( '#button_disabled' );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

	} );

	test( 'IsEnabled_InputNoValue_True', function() {

		var $b = $( '#input' );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

	} );

	test( 'IsEnabled_InputDisabled_False', function() {

		var $b = $( '#input_disabled' );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

	} );

	test( 'HasDisabledClass_AnchorNoValue_False', function() {

		var $b = $( '#anchor' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

	} );

	test( 'HasDisabledClass_AnchorDisabled_True', function() {

		var $b = $( '#anchor_disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( hasClass, 'disabled class not present' );

	} );

	test( 'HasDisabledClass_ButtonNoValue_False', function() {

		var $b = $( '#button' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

	} );

	test( 'HasDisabledClass_ButtonDisabled_False', function() {

		var $b = $( '#button_disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

	} );

	test( 'HasDisabledClass_InputNoValue_False', function() {

		var $b = $( '#input' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

	} );

	test( 'HasDisabledClass_InputDisabled_False', function() {

		var $b = $( '#input_disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

	} );

	test( 'HasDisabledAttr_AnchorNoValue_False', function() {

		var $b = $( '#anchor' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'has disabled attribute and should not' );

	} );

	test( 'HasDisabledAttr_AnchorDisabled_False', function() {

		var $b = $( '#anchor_disabled' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'has disabled attribute and should not' );

	} );

	test( 'HasDisabledAttr_ButtonNoValue_False', function() {

		var $b = $( '#button' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'has disabled attribute and should not' );

	} );

	test( 'HasDisabledAttr_ButtonDisabled_True', function() {

		var $b = $( '#button_disabled' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute not present' );

	} );

	test( 'HasDisabledAttr_InputNoValue_False', function() {

		var $b = $( '#input' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'has disabled attribute and should not' );

	} );

	test( 'HasDisabledAttr_InputDisabled_True', function() {

		var $b = $( '#input_disabled' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute not present' );

	} );

	test( 'HasAriaDisabled_AnchorNoValue_False', function() {

		var $b = $( '#anchor' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'HasAriaDisabled_AnchorDisabled_True', function() {

		var $b = $( '#anchor_disabled' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( isAriaDisabled, 'aria disabled invalid' );

	} );

	test( 'HasAriaDisabled_ButtonNoValue_False', function() {

		var $b = $( '#button' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'HasAriaDisabled_ButtonDisabled_False', function() {

		var $b = $( '#button_disabled' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'HasAriaDisabled_InputNoValue_False', function() {

		var $b = $( '#input' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'HasAriaDisabled_InputDisabled_False', function() {

		var $b = $( '#input_disabled' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'HasTabIndex_Anchor_True', function() {

		var $b = $( '#anchor' );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, 0 );

	} );

	test( 'HasTabIndex_AnchorDisabled_False', function() {

		var $b = $( '#anchor_disabled' );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, -1 );

	} );

	test( 'HasTabIndex_AnchorDisabledEnabled_True', function() {

		var $b = $( '#anchor_disabled' );

		$b.vui_button( 'setIsEnabled', true );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, 0 );

	} );

	test( 'HasTabIndex_AnchorEnabledDisabled_False', function() {

		var $b = $( '#anchor' );

		$b.vui_button( 'setIsEnabled', false );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, -1 );

	} );

	test( 'HasTabIndex_Button_True', function() {

		var $b = $( '#button' );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, 0 );

	} );

	test( 'HasTabIndex_ButtonDisabled_True', function() {

		var $b = $( '#button_disabled' );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, 0 );

	} );

	test( 'HasTabIndex_Input_True', function() {

		var $b = $( '#input' );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, 0 );

	} );

	test( 'HasTabIndex_InputDisabled_True', function() {

		var $b = $( '#input_disabled' );

		var tabIndex = $b.prop( 'tabIndex' );
		equal( tabIndex, 0 );

	} );

	test( 'SetIsEnabled_AnchorNoValueTrue_Enabled+NoClass+NoAttr+NoAria', function() {

		var $b = $( '#anchor' );

		$b.vui_button( 'setIsEnabled', true );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute present' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_AnchorNoValueFalse_Disabled+Class+NoAttr+Aria', function() {

		var $b = $( '#anchor' );

		$b.vui_button( 'setIsEnabled', false );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( hasClass, 'should have disabled class' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute present' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( isAriaDisabled, 'aria disabled missing' );

	} );

	test( 'SetIsEnabled_AnchorDisabledTrue_Enabled+NoClass+NoAttr+NoAria', function() {

		var $b = $( '#anchor_disabled' );

		$b.vui_button( 'setIsEnabled', true );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'has disabled attr and should not' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_AnchorDisabledFalse_Disabled+Class+NoAttr+Aria', function() {

		var $b = $( '#anchor_disabled' );

		$b.vui_button( 'setIsEnabled', false );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( hasClass, 'should have disabled class' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'has disabled attr and should not' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( isAriaDisabled, 'aria disabled missing' );

	} );

	test( 'SetIsEnabled_ButtonNoValueTrue_Enabled+NoClass+NoAttr+NoAria', function() {

		var $b = $( '#button' );

		$b.vui_button( 'setIsEnabled', true );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute present' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_ButtonNoValueFalse_Disabled+NoClass+Attr+NoAria', function() {

		var $b = $( '#button' );

		$b.vui_button( 'setIsEnabled', false );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute missing' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_ButtonDisabledTrue_Enabled+NoClass+NoAttr+NoAria', function() {

		var $b = $( '#button_disabled' );

		$b.vui_button( 'setIsEnabled', true );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute present' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_ButtonDisabledFalse_Disabled+NoClass+Attr+NoAria', function() {

		var $b = $( '#button_disabled' );

		$b.vui_button( 'setIsEnabled', false );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute missing' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_InputNoValueTrue_Enabled+NoClass+NoAttr+NoAria', function() {

		var $b = $( '#input' );

		$b.vui_button( 'setIsEnabled', true );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute present' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_InputNoValueFalse_Disabled+NoClass+Attr+NoAria', function() {

		var $b = $( '#input' );

		$b.vui_button( 'setIsEnabled', false );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute missing' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_InputDisabledTrue_Enabled+NoClass+NoAttr+NoAria', function() {

		var $b = $( '#input_disabled' );

		$b.vui_button( 'setIsEnabled', true );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( isEnabled, 'disabled, should be enabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute present' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	test( 'SetIsEnabled_InputDisabledFalse_Disabled+NoClass+Attr+NoAria', function() {

		var $b = $( '#input_disabled' );

		$b.vui_button( 'setIsEnabled', false );

		var isEnabled = $b.vui_button( 'isEnabled' );
		ok( !isEnabled, 'enabled, should be disabled' );

		var hasClass = $b.hasClass( 'vui-disabled' );
		ok( !hasClass, 'has disabled class and should not' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute missing' );

		var isAriaDisabled = $b.attr( 'aria-disabled' ) === 'true';
		ok( !isAriaDisabled, 'has aria disabled and should not' );

	} );

	module( 'Tooltip' );

	test( 'Tooltip_AnchorTitle_TitleAsTooltip', function() {

		var $b = $( '#anchor_title' );

		var title = $b.prop( 'title' );

		equal( title, 'anchor_title title' );

	} );

	test( 'Tooltip_AnchorIconTextNoTitle_NoTooltip', function() {

		var $b = $( '#anchor_icon_text_notitle' );

		var title = $b.prop( 'title' );

		equal( title, '' );

	} );

	test( 'Tooltip_AnchorIconTextEmptyTitle_EmptyTooltip', function() {

		var $b = $( '#anchor_icon_text_notitle' );

		var title = $b.prop( 'title' );

		equal( title, '' );

	} );

	test( 'Tooltip_AnchorIconTextTitle_TitleAsTooltip', function() {

		var $b = $( '#anchor_icon_text_title' );

		var title = $b.prop( 'title' );

		equal( title, 'anchor_icon_text_title title' );

	} );

	test( 'Tooltip_AnchorIconNoTextNoTitle_TextAsTooltip', function() {

		var $b = $( '#anchor_icon_notext_notitle' );

		var text = $b.children( '.vui-offscreen' ).text();
		var title = $b.prop( 'title' );

		equal( text, title, 'text does not match title: ' + text + ',' + title );

	} );

	test( 'Tooltip_AnchorIconNoTextEmptyTitle_TextAsTooltip', function() {

		var $b = $( '#anchor_icon_notext_emptytitle' );

		var text = $b.children( '.vui-offscreen' ).text();
		var title = $b.prop( 'title' );

		equal( text, title, 'text does not match title: ' + text + ',' + title );

	} );

	test( 'Tooltip_AnchorIconNoTextTitle_TitleAsTooltip', function() {

		var $b = $( '#anchor_icon_notext_title' );

		var text = $b.children( '.vui-offscreen' ).text();
		equal( text, 'anchor_icon_notext_title text' );

		var title = $b.prop( 'title' );
		equal( title, 'anchor_icon_notext_title title' );

	} );

	test( 'Tooltip_ButtonTitle_TitleAsTooltip', function() {

		var $b = $( '#button_title' );

		var title = $b.prop( 'title' );

		equal( title, 'button_title title' );

	} );

	test( 'Tooltip_ButtonIconTextNoTitle_NoTooltip', function() {

		var $b = $( '#button_icon_text_notitle' );

		var title = $b.prop( 'title' );

		equal( title, '' );

	} );

	test( 'Tooltip_ButtonIconTextEmptyTitle_EmptyTooltip', function() {

		var $b = $( '#button_icon_text_emptytitle' );

		var title = $b.prop( 'title' );

		equal( title, '' );

	} );

	test( 'Tooltip_ButtonIconTextTitle_TitleAsTooltip', function() {

		var $b = $( '#button_icon_text_title' );

		var title = $b.prop( 'title' );

		equal( title, 'button_icon_text_title title' );

	} );

	test( 'Tooltip_ButtonIconNoTextNoTitle_TextAsTooltip', function() {

		var $b = $( '#button_icon_notext_notitle' );

		var text = $b.children( '.vui-offscreen' ).text();
		var title = $b.prop( 'title' );

		equal( text, title, 'text does not match title: ' + text + ',' + title );

	} );

	test( 'Tooltip_ButtonIconNoTextEmptyTitle_TextAsTooltip', function() {

		var $b = $( '#button_icon_notext_emptytitle' );

		var text = $b.children( '.vui-offscreen' ).text();
		var title = $b.prop( 'title' );

		equal( text, title, 'text does not match title: ' + text + ',' + title );

	} );

	test( 'Tooltip_ButtonIconNoTextTitle_TitleAsTooltip', function() {

		var $b = $( '#button_icon_notext_title' );

		var text = $b.children( '.vui-offscreen' ).text();
		equal( text, 'button_icon_notext_title text' );

		var title = $b.prop( 'title' );
		equal( title, 'button_icon_notext_title title' );

	} );

	test( 'Tooltip_InputNoTitle_NoTooltip', function() {

		var $b = $( '#input' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	test( 'Tooltip_InputEmptyTitle_EmptyTooltip', function() {

		var $b = $( '#input' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	test( 'Tooltip_InputTitle_TitleAsTooltip', function() {

		var $b = $( '#input_title' );

		var title = $b.prop( 'title' );
		equal( title, 'input_title title' );

	} );

	module( 'Get Text' );

	test( 'GetText_Anchor_Text', function() {

		var $b = $( '#anchor' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor text' );

	} );

	test( 'GetText_AnchorDisabled_Text', function() {

		var $b = $( '#anchor_disabled' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor_disabled text' );

	} );

	test( 'GetText_AnchorSpecialEntity_Text', function() {

		var $b = $( '#anchor_entity' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor_entity << text' );

	} );

	test( 'GetText_AnchorIconText_Text', function() {

		var $b = $( '#anchor_icon_text_notitle' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor_icon_text_notitle text' );

	} );

	test( 'GetText_AnchorIconNoText_Text', function() {

		var $b = $( '#anchor_icon_notext_notitle' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor_icon_notext_notitle text' );

	} );

	test( 'GetText_Button_Text', function() {

		var $b = $( '#button' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'button text' );

	} );

	test( 'GetText_ButtonDisabled_Text', function() {

		var $b = $( '#button_disabled' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'button_disabled text' );

	} );

	test( 'GetText_ButtonSpecialEntity_Text', function() {

		var $b = $( '#button_entity' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'button_entity << text' );

	} );

	test( 'GetText_ButtonIconText_Text', function() {

		var $b = $( '#button_icon_text_notitle' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'button_icon_text_notitle text' );

	} );

	test( 'GetText_ButtonIconNoText_Text', function() {

		var $b = $( '#button_icon_notext_notitle' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'button_icon_notext_notitle text' );

	} );

	test( 'GetText_Input_Text', function() {

		var $b = $( '#input' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'input text' );

	} );

	test( 'GetText_InputDisabled_Text', function() {

		var $b = $( '#input_disabled' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'input_disabled text' );

	} );

	test( 'GetText_InputSpecialEntity_Text', function() {

		var $b = $( '#input_entity' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'input_entity << text' );

	} );

	module( 'Set Text' );

	test( 'SetText_Anchor_NewText', function() {

		var $b = $( '#anchor' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

	} );

	test( 'SetText_AnchorNoText_NewText', function() {

		var $b = $( '#anchor_notext' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

	} );

	test( 'SetText_AnchorTitle_NewTextTitleUnchanged', function() {

		var $b = $( '#anchor_title' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'anchor_title title' );

	} );

	test( 'SetText_AnchorIconTextNoTitle_NewTextNoTitle', function() {

		var $b = $( '#anchor_icon_text_notitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	test( 'SetText_AnchorIconTextEmptyTitle_NewTextNoTitle', function() {

		var $b = $( '#anchor_icon_text_emptytitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	test( 'SetText_AnchorIconTextTitle_NewTextTitleUnChanged', function() {

		var $b = $( '#anchor_icon_text_title' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'anchor_icon_text_title title' );

	} );

	test( 'SetText_AnchorIconNoTextNoTitle_NewTextNewTitle', function() {

		var $b = $( '#anchor_icon_notext_notitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'new text' );

	} );

	test( 'SetText_AnchorIconNoTextEmptyTitle_NewTextNewTitle', function() {

		var $b = $( '#anchor_icon_notext_emptytitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'new text' );

	} );

	test( 'SetText_AnchorIconNoTextTitle_NewTextTitleUnChanged', function() {

		var $b = $( '#anchor_icon_notext_title' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'anchor_icon_notext_title title' );

	} );

	test( 'SetText_Button_NewText', function() {

		var $b = $( '#button' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

	} );

	test( 'SetText_ButtonTitle_NewTextTitleUnchanged', function() {

		var $b = $( '#button_title' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'button_title title' );

	} );

	test( 'SetText_ButtonIconTextNoTitle_NewTextNoTitle', function() {

		var $b = $( '#button_icon_text_notitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	test( 'SetText_ButtonIconTextEmptyTitle_NewTextNoTitle', function() {

		var $b = $( '#button_icon_text_emptytitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	test( 'SetText_ButtonIconTextTitle_NewTextTitleUnChanged', function() {

		var $b = $( '#button_icon_text_title' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'button_icon_text_title title' );

	} );

	test( 'SetText_ButtonIconNoTextNoTitle_NewTextNewTitle', function() {

		var $b = $( '#button_icon_notext_notitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'new text' );

	} );

	test( 'SetText_ButtonIconNoTextEmptyTitle_NewTextNewTitle', function() {

		var $b = $( '#button_icon_notext_emptytitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'new text' );

	} );

	test( 'SetText_ButtonIconNoTextTitle_NewTextTitleUnChanged', function() {

		var $b = $( '#button_icon_notext_title' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'button_icon_notext_title title' );

	} );

	test( 'SetText_Input_NewTextNoTitle', function() {

		var $b = $( '#input' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	test( 'SetText_InputTitle_NewTextTitleUnchanged', function() {

		var $b = $( '#input_title' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, 'input_title title' );

	} );

	test( 'SetText_InputEmptyTitle_NewTextNoTitle', function() {

		var $b = $( '#input_emptytitle' );

		$b.vui_button( 'setText', 'new text' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'new text' );

		var title = $b.prop( 'title' );
		equal( title, '' );

	} );

	module( 'Processing Text' );

	test( 'Processing_Anchor_ProcessingRestore', function() {

		var $b = $( '#anchor_processing' );

		$b.vui_button( 'processingStart' );

		var hasDisabledClass = $b.hasClass( 'vui-disabled' );
		ok( hasDisabledClass, 'disabled class added' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor_processing processing', 'processing text applied' );

		$b.vui_button( 'processingEnd' );

		hasDisabledClass = $b.hasClass( 'vui-disabled' );
		ok( !hasDisabledClass, 'disabled class removed' );

		text = $b.vui_button( 'getText' );
		equal( text, 'anchor_processing text', 'text restored' );

	} );

	test( 'Processing_AnchorNoProcessingText_Disable', function() {

		var $b = $( '#anchor' );

		$b.vui_button( 'processingStart' );

		var hasDisabledClass = $b.hasClass( 'vui-disabled' );
		ok( hasDisabledClass, 'disabled class added' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor text', 'text retained' );

		$b.vui_button( 'processingEnd' );

		hasDisabledClass = $b.hasClass( 'vui-disabled' );
		ok( !hasDisabledClass, 'disabled class removed' );

		text = $b.vui_button( 'getText' );
		equal( text, 'anchor text', 'text retained' );

	} );

	asyncTest( 'Processing_AnchorAsync_ProcessingRestore', 4, function() {

		var $b = $( '#anchor_processing' );

		$b.vui_button( 'processingStart' );

		var hasDisabledClass = $b.hasClass( 'vui-disabled' );
		ok( hasDisabledClass, 'disabled class added' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'anchor_processing processing', 'processing text applied' );

		setTimeout( function() {
	
			$b.vui_button( 'processingEnd' );

			hasDisabledClass = $b.hasClass( 'vui-disabled' );
			ok( !hasDisabledClass, 'disabled class removed' );

			text = $b.vui_button( 'getText' );
			equal( text, 'anchor_processing text', 'text restored' );

			start();

		}, 50 );

	} );

	test( 'Processing_Button_ProcessingRestore', function() {

		var $b = $( '#button_processing' );

		$b.vui_button( 'processingStart' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute present' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'button_processing processing', 'processing text applied' );

		$b.vui_button( 'processingEnd' );

		hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute removed' );

		text = $b.vui_button( 'getText' );
		equal( text, 'button_processing text', 'text restored' );

	} );

	test( 'Processing_ButtonNoProcessingText_Disable', function() {

		var $b = $( '#button' );

		$b.vui_button( 'processingStart' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute present' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'button text', 'text retained' );

		$b.vui_button( 'processingEnd' );

		hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute removed' );

		text = $b.vui_button( 'getText' );
		equal( text, 'button text', 'text retained' );

	} );

	test( 'Processing_Input_ProcessingRestore', function() {

		var $b = $( '#input_processing' );

		$b.vui_button( 'processingStart' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute present' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'input_processing processing', 'processing text applied' );

		$b.vui_button( 'processingEnd' );

		hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute removed' );

		text = $b.vui_button( 'getText' );
		equal( text, 'input_processing text', 'text restored' );

	} );

	test( 'Processing_InputNoProcessingText_Disable', function() {

		var $b = $( '#input' );

		$b.vui_button( 'processingStart' );

		var hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( hasDisabledAttr, 'disabled attribute present' );

		var text = $b.vui_button( 'getText' );
		equal( text, 'input text', 'text retained' );

		$b.vui_button( 'processingEnd' );

		hasDisabledAttr = $b.attr( 'disabled' ) !== undefined;
		ok( !hasDisabledAttr, 'disabled attribute removed' );

		text = $b.vui_button( 'getText' );
		equal( text, 'input text', 'text retained' );

	} );

	module( 'Destruction' );

	test( 'Destroy_AllButtons_NoWidgetInstance', function() {

		$( '.vui-button' ).each( function( index, node ) {
			
			var $node = $( node );
			$node.vui_button( 'destroy' );

			ok( $node.data( 'vui-vui_button' ) === undefined, 'widget instance check' );

		} );

	});

	test( 'Destroy_AnchorButton_NoGeneratedAttributes', function() {

		var $anchorButton = $( '#anchor' );

		$anchorButton.vui_button( 'destroy' );

		ok( $anchorButton.attr( 'role' ) === undefined, 'role attribute check' );
		ok( $anchorButton.attr( 'aria-disabled' ) === undefined, 'aria disabled attribute check' );
		ok( $anchorButton.attr( 'tabindex' ) === undefined, 'tabindex attribute check' );

	});

	module( 'Clicking' );

	test( 'Click_AnchorClick_ClickEventFires', function() {

		expect( 1 );

		var $b = $( '#anchor' );

		$b.click( function() { ok( true ); } ).click();

	} );

	test( 'Click_AnchorEnter_ClickEventFires', function() {

		expect( 1 );

		var $b = $( '#anchor' );

		var e = $.Event( 'keypress' );
		e.keyCode = 13;

		$b.click( function() { ok( true ); } )
			.trigger( e );

	} );

	test( 'Click_ButtonClick_ClickEventFires', function() {

		expect( 1 );

		var $b = $( '#button' );

		$b.click( function() { ok( true ); } ).click();

	} );

	test( 'Click_InputClick_ClickEventFires', function() {

		expect( 1 );

		var $b = $( '#input' );

		$b.click( function() { ok( true ); } ).click();

	} );

})( window.jQuery );