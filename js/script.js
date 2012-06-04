$(document).ready(function () {
    $('#addElements').doModal('#carousel');
});

window.addEventListener('load', function (e) {
    setTimeout(function () {
        window.scrollTo(0, 1);
    },
    1)
},
false);

/*
var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
}, false);
*/
var selectedBox = "null";
var element = 0;
var imageN = 0;
window.onload = function () {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var stage = new Kinetic.Stage({
        container: "container",
        width: winW,
        height: winH
    });
    var layer = new Kinetic.Layer();
    
    var resizeGroup = new Kinetic.Group({
        x: 0,
        y: 0,
        draggable: true
    });
    layer.add(resizeGroup);
    
    stage.add(layer);
    
    
    
	document.getElementById("resize").addEventListener("click", function() {

		selectedBox.moveTo(layer);
		resizeGroup.removeChildren();

		addAnchor(resizeGroup, selectedBox.getX(), selectedBox.getY(), "topLeft");
		addAnchor(resizeGroup, selectedBox.getX() + selectedBox.getWidth(), selectedBox.getY(), "topRight");
		addAnchor(resizeGroup, selectedBox.getX() + selectedBox.getWidth(), selectedBox.getY() + selectedBox.getHeight(), "bottomRight");
		addAnchor(resizeGroup, selectedBox.getX(), selectedBox.getY() + selectedBox.getHeight(), "bottomLeft");

		selectedBox.moveTo(resizeGroup);
		//resizeGroup.setAbsolutePosition(selectedBox.getPosition()-selectedBox.getPosition());
		
		resizeGroup.setX(selectedBox.getPosition().x-selectedBox.getPosition().x);
		resizeGroup.setY(selectedBox.getPosition().y-selectedBox.getPosition().y);

		resizeGroup.on("dragstart", function() {
			this.moveToTop();
		});
		layer.draw();

	}, false);
    
	document.getElementById("noresize").addEventListener("click", function() {

		selectedBox.setX(selectedBox.getPosition().x+resizeGroup.getPosition().x); 
		selectedBox.setY(selectedBox.getPosition().y+resizeGroup.getPosition().y); 

		selectedBox.moveTo(layer);
		/*
		topLeft.attrs.y = activeAnchor.attrs.y;
		topLeft.attrs.x = activeAnchor.attrs.x;
		image.setPosition(topLeft.attrs.x, topLeft.attrs.y);
		*/

		//selectedBox.setX(newX);
		//selectedBox.setY(newY);

		resizeGroup.removeChildren();
		//alert(selectedBox.getPosition().x);
		//resizeGroup.setPosition(selectedBox.getPosition());

		layer.draw();
	}, false);
    
    document.getElementById("removeElement").addEventListener("click", function () {
        resizeGroup.removeChildren();
        layer.remove(selectedBox);
        layer.draw();
    },
    false);
    
    document.getElementById("moveUp").addEventListener("click", function () {
        selectedBox.moveUp();
        layer.draw();
    },
    false);
    
    document.getElementById("moveDown").addEventListener("click", function () {
        selectedBox.moveDown();
        layer.draw();
    },
    false);
    
    document.getElementById("fig1").addEventListener("click", function () {
        addFigure(layer, stage, element);
        stage.add(layer);
        element++;
    },
    false);
    
    document.getElementById("addImg").addEventListener("click", function () {
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("close-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("slider-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("raiting-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("text-input-box").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("button-box").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("dropdown-box").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("search-box").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("textarea-input-box").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("checkbox-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("radio-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("bar-graph").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("pie-chart").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("line-graph").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("shopping-cart").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("minus-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("plus-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("edit-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("home-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("vertical-line").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("horizontal-line").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("grid-layout").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("circle-layout").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("rectangle-layout").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("profile-picture").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("video-player").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("microphone").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("map-layout").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("vertical-link-list").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("horizontal-link-list").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("horizontal-list").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("button-bar").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("tab-container").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("pagination").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("next-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("previous-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("text-layout").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("link-button").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("copyright").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("banner-ad").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("captcha").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
    
    document.getElementById("tag-cloud").addEventListener("click", function () {
        restyleElements();
        addImage(layer, stage, imageN);
        layer.draw();
        stage.add(layer);
        imageN++;
    },
    false);
};
function restyleElements() {
    var ele = document.getElementById("carousel");
    ele.style.display = "none";
    var body = document.body;
    body.style.overflow = "scroll";
}
function update(group, activeAnchor) {
    var topLeft = group.get(".topLeft")[0];
    var topRight = group.get(".topRight")[0];
    var bottomRight = group.get(".bottomRight")[0];
    var bottomLeft = group.get(".bottomLeft")[0];
    var image = group.get(".image")[0];
    
    // update anchor positions
    switch (activeAnchor.getName()) {
        case "topLeft":
        topRight.attrs.y = activeAnchor.attrs.y;
        bottomLeft.attrs.x = activeAnchor.attrs.x;
        break;
        case "topRight":
        topLeft.attrs.y = activeAnchor.attrs.y;
        bottomRight.attrs.x = activeAnchor.attrs.x;
        break;
        case "bottomRight":
        bottomLeft.attrs.y = activeAnchor.attrs.y;
        topRight.attrs.x = activeAnchor.attrs.x;
        break;
        case "bottomLeft":
        bottomRight.attrs.y = activeAnchor.attrs.y;
        topLeft.attrs.x = activeAnchor.attrs.x;
        break;
    }
    
    image.setPosition(topLeft.attrs.x, topLeft.attrs.y);
    image.setSize(topRight.attrs.x - topLeft.attrs.x, bottomLeft.attrs.y - topLeft.attrs.y);
}

function addAnchor(group, x, y, name) {
    var stage = group.getStage();
    var layer = group.getLayer();
    
    var anchor = new Kinetic.Circle({
        x: x,
        y: y,
        stroke: "#666",
        fill: "#ddd",
        strokeWidth: 2,
        radius: 8,
        name: name,
        draggable: true
    });
    
    anchor.on("dragmove", function () {
        update(group, this);
        layer.draw();
    });
    anchor.on("mousedown touchstart", function () {
        group.draggable(false);
        this.moveToTop();
    });
    anchor.on("dragend", function () {
        group.draggable(true);
        layer.draw();
    });
    // add hover styling
    anchor.on("mouseover", function () {
        var layer = this.getLayer();
        document.body.style.cursor = "pointer";
        this.setStrokeWidth(4);
        layer.draw();
    });
    anchor.on("mouseout", function () {
        var layer = this.getLayer();
        document.body.style.cursor = "default";
        this.setStrokeWidth(2);
        layer.draw();
    });
    
    group.add(anchor);
}

function addImage(layer, stage, nume) {
	var imageObj = new Image();
        imageObj.onload = function() {
          var image = new Kinetic.Image({
            x: stage.getWidth() / 2 - 53,
            y: stage.getHeight() / 2 - 59,
            image: imageObj,
            draggable : true,
            width: 106,
            name: "image",
            height: 118
          });
          
          image.on("mouseover", function() {
			document.body.style.cursor = "pointer";

			});
		image.on("click", function() {
			selectedBox = image;
		});

		image.on("dragstart", function() {
			selectedBox = image;
		});

		image.on("mouseout", function() {
			document.body.style.cursor = "default";
		});

          // add the shape to the layer
          layer.add(image);

          // add the layer to the stage
          stage.add(layer);
        };
        imageObj.src = "images/box.png";

}

function addFigure(layer, stage, nume) {
    
    var offsetX = 0;
    var offsetY = 0;
    var color = "yellow";
    // anonymous function to induce scope
    (function () {
        var i = 0;
        var box = new Kinetic.Rect({
            x: i * 30 + 210,
            y: i * 18 + 40,
            width: 100,
            height: 50,
            fill: color,
            stroke: "black",
            strokeWidth: 4,
            draggable: true,
            name: nume
        });
        
        box.on("mouseover", function () {
            document.body.style.cursor = "pointer";
        });
        box.on("click", function () {
            selectedBox = box;
        });
        
        box.on("dragstart", function () {
            selectedBox = box;
        });
        
        box.on("mouseout", function () {
            document.body.style.cursor = "default";
        });
        
        layer.add(box);
    })();
}