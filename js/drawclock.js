function drawNumbers(canvas, center, radius, width1, width2, minorLength, majorLength, cap, color) {
    ctx.strokeStyle = color;
    ctx.lineCap = cap;
    ctx.translate(center, center);
    for (var a=0,aMax=(2*Math.PI),aStep=(Math.PI/12); a<aMax; a+=aStep){
	    var px1 = Math.sin(a)*(radius-minorLength);
	    var py1 = Math.cos(a)*(radius-minorLength);
	    var px2 = Math.sin(a)*radius;
	    var py2 = Math.cos(a)*radius;
	    ctx.lineWidth = width1;
	    ctx.beginPath();
	    ctx.moveTo(px1, py1);
	    ctx.lineTo(px2, py2);
	    ctx.stroke();
		ctx.closePath();
	};
	for (var a=0,aMax=(2*Math.PI),aStep=(Math.PI/4); a<aMax; a+=aStep){
	    var px1 = Math.sin(a)*(radius-majorLength);
	    var py1 = Math.cos(a)*(radius-majorLength);
	    var px2 = Math.sin(a)*radius;
	    var py2 = Math.cos(a)*radius;
	    ctx.lineWidth = width2;
	    ctx.beginPath();
	    ctx.moveTo(px1, py1);
	    ctx.lineTo(px2, py2);
	    ctx.stroke();
		ctx.closePath();
	};
	ctx.translate(-center, -center);
}