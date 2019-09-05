---
title: "Adding column number CSS classes to Wordpress widgets"
date: "2012-02-27"
categories: ["Development", "Small Clients"]
tags: ["CSS", "wordpress"]
---

I'm working on a WordPress theme that is designed to provide a  lot of flexibility. It has many widget areas (sidebars) and quite a few supplied custom widgets. The widget areas have different layouts, either:

*   single column, full page width
*   two columns, full page width
*   three columns, full page width
*   single column, one-third page width

Each widget needs to display well in each of those different layouts. In addition to this, the theme will be a responsive design, meaning that it will adapt it's layout for Mobile Phone and tablet screens.

Most of the flexibility is easily handled with smart CSS that uses percentage or em values to handle the varying space.

The tricky bit I ran into is handling the two and three column scenarios. For widgets in these sidebars I really wanted to make life easier by adding my  'column classes'. These are classes that handle the layout of the site, they apply all the floats and width values needed to achieve the multi column layouts.

*   .col1 and .col2 are classes that handle my two column layouts (left and right)
*   .col3, .col4 and  .col5 are classes that handle my three column layouts (left, middle and right)

I found a few [posts](http://www.mummey.org/2009/02/styling-wordpress-dynamic-sidebar-dynamic_sidebar_params-filter/) and [discussions](http://wordpress.org/support/topic/dynamic-widget-classes-for-use-in-css) about adding custom classes to each widget, but these only added 'odd ' and 'even' classes. This worked fine for my two column requirement but I also needed to be able to handle 3 columns as well. So the folllowing is my solution. Hopefully this helps someone with the same need.

Firstly I add a specific class to each sidebar that needs to be columnised:

```
register_sidebar(array(
	'name'=> __('Products Bottom', TEMPLATE_DOMAIN),
	'before_widget' => '*   ',
    	'after_widget' => '
',
	'before_title' => '

### ',
	'after_title' => '

',
));
register_sidebar(array(
	'name'=> __('Downloads Bottom', TEMPLATE_DOMAIN),
	'before_widget' => '*   ',
    	'after_widget' => '
',
	'before_title' => '

### ',
	'after_title' => '

',
));

```

Next, this is the functions that is called when a widget is loaded. Here the code checks to see if the widget needs to be columnised (or columnized if the US style). From there it's just some PHP string work to apply the correct class name for the widget.

```
add_filter('dynamic_sidebar_params','columnise_widgets');
function columnise_widgets($params) {
	/*
	apply column class names to widgets that are in sidebars that request it.
	
	The widget will contain one of these classes if it needs a column class:
	- columnise-two (add .col1 or .col2)
	- columnise-three (add .col3 or .col4 or .col5);
	
	*/
	
	/*
	Find the point in the before_widget string where we'll append class names, just before the closing " of the class attribute
	*/
	$classStartNeedle = 'class="';
	$classStrStart = strpos($params[0]['before_widget'],$classStartNeedle);
	$classStrEnd = strpos($params[0]['before_widget'],'"', ($classStrStart + strlen($classStartNeedle) )  );
	
	// check for the columnise flags
	$columnise2 = strstr($params[0]['before_widget'],'columnise-two');
	$columnise3 = strstr($params[0]['before_widget'],'columnise-three');
	
	if($columnise2 || $columnise3){
		global $my_widget_num;
		$my_widget_num++;
		if($columnise2){
			$cnum = ($my_widget_num % 2) + 1; // returns 1 or 2
		}else{
			$cnum = 2 + ($my_widget_num % 3); //returns 3, 4 or 2
			$cnum = $cnum == 2 ? 5 : $cnum ; // returns 3, 4 or 5
		}
		$class = ' col'.$cnum .' widget_index_'.$my_widget_num; // widget_index class is also handy for styling specific widgets with old browsers just using css1
		$params[0]['before_widget'] = substr_replace($params[0]['before_widget'], $class, 			$classStrEnd,0);
	}
	return $params;
}

```

This last function resets the $my\_widget\_num variable every time a new sidebar is requested,  
if this isn't done then the widget numbering will continue from any previous widgets on the same page.

```
add_filter('get_sidebar','columnise_widgets_counter_reset', 99);
function columnise_widgets_counter_reset($text) {
   global $my_widget_num;
   $my_widget_num = 0;
   return $text;
}

```

Of course, all these code snippets of belong in your functions.php file.
