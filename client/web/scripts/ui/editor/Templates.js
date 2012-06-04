
		define(["vendor/Handlebars"], function(Handlebars) {
			return {
		
"Component": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var self=this;  return "<div class=\"content\"></div><span class=\"topLabel label\" data-delta=\"skewX\">Skew X</span><span class=\"leftLabel label\" data-delta=\"skewY\">Skew Y</span><span class=\"rightLabel label\" data-delta=\"rotate\">Rotate</span><span class=\"scale label\" data-delta=\"scale\">Scale</span><span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>";}),
"Editor": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var buffer = "", stack1, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data) {    var buffer = "", stack1;  buffer += "                        <li data-option=\"";  stack1 = helpers.perspective || depth0.perspective;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "perspective", { hash: {} }); }  buffer += escapeExpression(stack1) + "\"><a href=\"#\">";  stack1 = helpers.name || depth0.name;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }  buffer += escapeExpression(stack1) + "</a></li>                    ";  return buffer;}  buffer += "<div class=\"navbar navbar-fixed-top menuBar\">  <div class=\"btn-inverse temp\">    <div class=\"container\">    	<a class=\"brand\" href=\"#\">Strut 0.1</a>     	<ul class=\"nav\">     		<li class=\"dropdown active\">     			<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">     				File<b class=\"caret\"></b>     			</a>     			<ul class=\"dropdown-menu\">     		 		<li data-option=\"new\"><a href=\"#\">New</a></li>     				<li data-option=\"open\"><a href=\"#\">Open...</a></li><!--     				<li data-option=\"openRecent\"><a href=\"#\">Open Recent...</a></li> -->     				<li data-option=\"save\"><a href=\"#\">Save</a></li>     				<li data-option=\"saveAs\"><a href=\"#\">Save As...</a></li>     			</ul>     		</li>            <li class=\"dropdown active\">                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                    Edit<b class=\"caret\"></b>                </a>                <ul class=\"dropdown-menu\">                    <li data-option=\"undo\"><a href=\"#\">Undo <span class=\"undoName label\"></span></a></li>                    <li data-option=\"redo\"><a href=\"#\">Redo <span class=\"redoName label\"></span></a></li>                    <li data-option=\"cut\"><a href=\"#\">Cut</a></li>                    <li data-option=\"copy\"><a href=\"#\">Copy</a></li>                    <li data-option=\"paste\"><a href=\"#\">Paste</a></li>                </ul>            </li>            <li class=\"dropdown active\">                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                    View<b class=\"caret\"></b>                </a>                <ul class=\"dropdown-menu\">                    ";  stack1 = helpers.perspectives || depth0.perspectives;  tmp1 = self.program(1, program1, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "                        <li data-option=\"preview\"><a href=\"#\">Preview Show</a></li>                </ul>            </li>            <li class=\"dropdown active\">                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                    Slideshow<b class=\"caret\"></b>                </a>                <ul class=\"dropdown-menu\">                    <li data-option=\"exportJSON\"><a href=\"#\">Export to JSON</a></li>                    <li data-option=\"importJSON\"><a href=\"#\">Import from JSON</a></li>                    <li class=\"divider\"></li>                    <li data-option=\"changeBackground\"><a href=\"#\">Change Background</a></li>                </ul>            </li>     	</ul>    </div>  </div></div><div class=\"perspectives-container\"></div>";  return buffer;}),
"SlideEditor": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var self=this;  return "<div class=\"navbar\">  <div class=\"navbar-inner buttonBar\">    <div class=\"container\">    	<ul class=\"nav\">            <li style=\"width: 120px\">            	<div class=\"btn-group iconBtns newSlide\">            		<a class=\"btn btn btn-small menuBarOption\" data-option=\"createSlide\" href=\"#\"><i class=\"icon-plus\"></i>Slide</a>            	</div>            </li>            <li class=\"divider-vertical\">            </li>            <li>            	<div class=\"btn-group normalBtns\">            		<a class=\"btn btn-inverse dropdown-toggle btn-small disabled fontButton fontFamilyBtn\" data-toggle=\"dropdown\" title=\"Choose the font family\"><span class=\"text\">Lato</span><span class=\"caret\"></span></a>            		<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontFamily\">            			<li>                                    <a href=\"#\" data-value=\"'Lato', sans-serif\">Lato</a>                                    <a href=\"#\" data-value=\"'Ubuntu', sans-serif\">Ubuntu</a>                                    <a href=\"#\" data-value=\"'Abril Fatface', cursive\">Abril</a>                                    <a href=\"#\" data-value=\"'Hammersmith One', sans-serif\">Hammersmith One</a>                                    <a href=\"#\" data-value=\"'Fredoka One', cursive\">Fredoka One</a>                                    <a href=\"#\" data-value=\"'Gorditas', cursive\">Gorditas</a>                                    <a href=\"#\" data-value=\"'Press Start 2P', cursive\">Press Start 2P</a>            			</li>            		</ul>            	</div>            </li>            <li>            	<div class=\"btn-group normalBtns\">            		<a class=\"btn btn-small btn-inverse dropdown-toggle disabled fontButton fontSizeBtn\" data-toggle=\"dropdown\" title=\"Choose the font size\"><span class=\"text\">72</span>            			<span class=\"caret\"></span></a>            		<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontSize\">            			<li>                                    <a href=\"#\" data-value=\"144\">144</a>                                    <a href=\"#\" data-value=\"96\">96</a>                                    <a href=\"#\" data-value=\"72\">72</a>            				<a href=\"#\" data-value=\"64\">64</a>                                    <a href=\"#\" data-value=\"48\">48</a>                                    <a href=\"#\" data-value=\"36\">36</a>                                    <a href=\"#\" data-value=\"24\">24</a>            			</li>            		</ul>            	</div>            </li>            <li>                  <div class=\"color-chooser normalBtns\"><div></div></div>            </li>            <li class=\"divider-vertical\">            </li>            <li>                  <div class=\"btn-group menuBarOption normalBtns\">                        <a class=\"btn btn-small btn-inverse disabled fontButton\" data-option=\"fontWeight\" data-value=\"bold\"><strong>B</strong></a>                        <a class=\"btn btn-small btn-inverse disabled fontButton\" data-option=\"fontStyle\" data-value=\"italic\"><em>I</em></a>                        <a class=\"btn btn-small btn-inverse underline disabled fontButton\" data-option=\"fontDecoration\" data-value=\"underline\">U</a>                  </div>            </li>            <li>                  <div class=\"btn-group menuBarOption normalBtns\">                        <a class=\"btn btn-small btn-inverse disabled fontButton\" data-option=\"textAlign\" data-value=\"left\"><i class=\"icon-align-left icon-white\"></i></a>                        <a class=\"btn btn-small btn-inverse disabled fontButton\" data-option=\"textAlign\" data-value=\"center\"><i class=\"icon-align-center icon-white\"></i></a>                        <a class=\"btn btn-small btn-inverse disabled fontButton\" data-option=\"textAlign\" data-value=\"right\"><i class=\"icon-align-right icon-white\"></i></a>                        <a class=\"btn btn-small btn-inverse disabled fontButton\" data-option=\"textAlign\" data-value=\"justify\"><i class=\"icon-align-justify icon-white\"></i></a>                  </div>            </li>            <li class=\"divider-vertical\">            </li>            <li>                  <div class=\"btn-group iconBtns\">                        <a class=\"btn menuBarOption\" data-option=\"textBox\"><i class=\"icon-text-width\"></i>Text</a>                        <a class=\"btn btn menuBarOption\" data-option=\"picture\"><i class=\"icon-picture\"></i>Image</a>                        <a class=\"btn btn menuBarOption\" data-option=\"table\"><i class=\"icon-th\"></i>Table</a>                        <a class=\"btn btn menuBarOption\" data-option=\"shapes\"><i class=\"icon-star\"></i>Shapes</a>                  </div>            </li>            <li class=\"divider-vertical\">            </li>        </ul>        <ul class=\"nav pull-right\">            <li>                  <div class=\"btn-group\">                        <a class=\"btn btn-danger transitionEditorBtn\" data-option=\"preview\"><span>Preview Show</span></a>                        <a class=\"btn btn-danger transitionEditorBtn\" data-option=\"transitionEditor\"><span>Transition Editor</span><i class=\"icon-arrow-right\"></i></a>                  </div>            </li>        </ul>    </div>  </div></div><div class=\"mainContent\"></div>";}),
"SlideSnapshot": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var self=this;  return "<canvas></canvas><span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span><span class=\"badge badge-inverse\"></span>";}),
"TransitionEditor": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var self=this;  return "<div class=\"navbar\">  <div class=\"navbar-inner buttonBar\">    <div class=\"container\">      <ul class=\"nav slideRotations\">        <li>          <span class=\"label label-inverse\">Rot. X:</span><input type=\"text\" data-option=\"rotateX\"></input>        </li>        <li>          <span class=\"label label-inverse\">Rot. Y:</span><input type=\"text\" data-option=\"rotateY\"></input>        </li>        <li>          <span class=\"label label-inverse\">Rot. Z:</span><input type=\"text\" data-option=\"rotateZ\"></input>        </li>        <li class=\"divider-vertical\">        </li>      </ul>      <ul class=\"nav cameraSettings\">        <li>          <div class=\"btn-group cameraControls\">            <button class=\"btn\"><i class=\"icon-camera\"></i></button>            <a class=\"btn active\" data-option=\"lookDownZ\">Z</a>            <a class=\"btn\" data-option=\"lookDownY\">Y</a>            <a class=\"btn\" data-option=\"lookDownX\">X</a>          </div>        </li>      </ul>    	<ul class=\"nav pull-right\">    		<li>    			<div class=\"btn-group\">                        <a class=\"btn btn-danger menuBarOption\" data-option=\"slideEditor\"><i class=\"icon-arrow-left\"></i>Back</a>                        <a class=\"btn btn-danger menuBarOption\" data-option=\"preview\">Preview Show<i class=\"icon-arrow-right\"></i></a>                  </div>    		</li>    	</ul>   	</div>  </div></div><div class=\"transitionSlides\"></div>";}),
"TransitionSlideSnapshot": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var self=this;  return "<div class=\"content\"><canvas></canvas></div><span class=\"topLabel label\" data-delta=\"rotateY\">Rotate Y</span><span class=\"leftLabel label\" data-delta=\"rotateX\">Rotate X</span><span class=\"rightLabel label\" data-delta=\"rotateZ\">Rotate Z</span><div class=\"spinners\"><input type=\"text\" class=\"smartspinner label\" data-name=\"depth\"/><input type=\"text\" class=\"smartspinner label\" data-name=\"scale\"/></div><span class=\"badge badge-inverse\"></span>";})
}});