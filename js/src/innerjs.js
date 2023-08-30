//Inner API
class createContainer {
	constructor({
		name: a,
		p: b,
		visible: c = !0,
		alpha: d = 1,
		x: e = 0,
		y: f = 0,
		scale: g = 1,
	}) {
		return (
			(a = new PIXI.Container()),
			a.position.set(e, f),
			b.addChild(a),
			(a.visible = c),
			(a.alpha = d),
			a.scale.set(g),
			a
		);
	}
}
class createSprite {
	constructor({
		name: a,
		p: b,
		tex: c,
		x: d = 0,
		y: e = 0,
		anchor: f = [0.5, 0.5],
		scale: g = 1,
		visible: h = !0,
		alpha: i = 1,
	}) {
		return (
			(a = new PIXI.Sprite()),
			(a.texture = moduleTexture.pixiTextures[c]),
			a.position.set(d, e),
			a.anchor.set(f[0], f[1]),
			a.scale.set(g),
			(a.visible = h),
			(a.alpha = i),
			b.addChild(a),
			a
		);
	}
}
class createRect {
	constructor({
		name: a,
		p: b,
		visible: c = !0,
		alpha: d = 1,
		x: e = 0,
		y: f = 0,
		width: g = 0,
		height: h = 0,
		color: i = "0x000000",
		fill: j = 1,
		radius: k = 0,
		lineColor: l = "0x000000",
		lineWeigth: m = 0,
	}) {
		return (
			(a = new PIXI.Graphics()),
			a.beginFill(i, j),
			a.lineStyle(m, l, 1),
			a.drawRoundedRect(e, f, g, h, k),
			a.endFill(),
			(a.alpha = d),
			(a.visible = c),
			b.addChild(a),
			a
		);
	}
}
class createCircle {
	constructor({
		name: a,
		p: b,
		visible: c = !0,
		alpha: d = 1,
		x: e = 0,
		y: f = 0,
		radius: g = 5,
		color: h = "0x000000",
		fill: i = 1,
	}) {
		return (
			(a = new PIXI.Graphics()),
			a.beginFill(h, i),
			a.drawCircle(0, 0, g),
			a.position.set(e, f),
			a.endFill(),
			(a.alpha = d),
			(a.visible = c),
			b.addChild(a),
			a
		);
	}
}
class createSequence {
	constructor({
		name: a,
		p: b,
		tex: c,
		data: d,
		prefix: e,
		frame: f = 0,
		seq: g = 0,
		totalFrame: h = 0,
		x: i = 0,
		y: j = 0,
		scale: k = 1,
		alpha: l = 1,
		visible: m = !0,
		loop: n = !1,
		slow: o = 0,
		reverse: p = !1,
		stopFrame: q = !1,
	}) {
		let r;
		return (
			(a = new createContainer({ p: b })),
			(r = d[0].frames[e + "" + f + ".png"].frame),
			(appMc[c + "S" + g] = new createSprite({
				p: a,
				tex: c,
				x: -0.5 * r.w - r.x,
				y: -1 * r.h - r.y,
				anchor: [0, 0],
			})),
			(appMc[c + "M" + g] = new createRect({
				p: a,
				x: -0.5 * r.w,
				y: -1 * r.h,
				width: r.w,
				height: r.h,
			})),
			(appMc[c + "S" + g].mask = appMc[c + "M" + g]),
			a.scale.set(k),
			(a.visible = m),
			(a.alpha = l),
			(a.frame = 0),
			(a.playF = 0),
			(a.pF = !0),
			(a.update = () => {
				var b;
				a.visible &&
					((b = d[0].frames[e + "" + a.frame + ".png"].frame),
					(appMc[c + "S" + g].x = -0.5 * b.w - b.x),
					(appMc[c + "S" + g].y = -1 * b.h - b.y),
					a.playF++,
					0 == o
						? p
							? a.pF
								? a.frame++
								: a.frame--
							: a.frame++
						: 0 == a.playF % o &&
						  (p ? (a.pF ? a.frame++ : a.frame--) : a.frame++),
					p
						? (a.frame >= h && a.pF && (a.pF = !1),
						  0 >= a.frame && !a.pF && (a.pF = !0))
						: a.frame >= h &&
						  (n
								? ((a.frame = 0), (a.playF = 0))
								: q
								? ((a.frame = h), (a.playF = 0))
								: (a.visible = !1)));
			}),
			a
		);
	}
}
class createDigit {
	constructor({
		name: a,
		p: b,
		num: e = 0,
		x: f = 0,
		y: g = 0,
		scale: h = 1,
		tex: c,
		data: d,
		tint: j = "0xffffff",
		spacing: k = 0,
		aling: l = "left",
		separate: m = "false",
		snum: n = 0,
		pref: o = "empty",
		prefX: p = 0,
		prefY: q = 0,
	}) {
		let r,
			s,
			t = ["9", "9", "9", "9", "9", "9", "9", "9", "9", "9"],
			u = c,
			v = 0,
			w = 0;
		a = new PIXI.Container();
		let x = d[0].frames[t[0] + ".png"].frame.w,
			y = k * t.length - 1 + x * t.length;
		for (r = 0; r < t.length; r++)
			(appMc["DigG" + r] = new createContainer({ p: a })),
				(s = d[0].frames[t[r] + ".png"].frame),
				(appMc["DigS" + r] = new createSprite({
					p: appMc["DigG" + r],
					tex: u,
					x: -0.5 * s.w - s.x,
					y: -1 * s.h - s.y,
					anchor: [0, 0],
				})),
				(appMc["DigS" + r].tint = j),
				(appMc["DigM" + r] = new createRect({
					p: appMc["DigG" + r],
					x: -0.5 * s.w,
					y: -1 * s.h,
					width: s.w,
					height: s.h,
				})),
				(appMc["DigS" + r].mask = appMc["DigM" + r]),
				appMc["DigG" + r].position.set(k + w + s.w, 0),
				(w = k + w + s.w),
				(v += s.w + 0);
		if (
			(m &&
				((appMc.DigSeparate = new createContainer({ p: a })),
				(s = d[0].frames["dot.png"].frame),
				(appMc.DigSeparateS = new createSprite({
					p: appMc.DigSeparate,
					tex: u,
					x: -0.5 * s.w - s.x,
					y: -1 * s.h - s.y,
					anchor: [0, 0],
				})),
				(appMc.DigSeparateS.tint = j),
				(appMc.DigSeparateM = new createRect({
					p: appMc.DigSeparate,
					x: -0.5 * s.w,
					y: -1 * s.h,
					width: s.w,
					height: s.h,
				})),
				(appMc.DigSeparateS.mask = appMc.DigSeparateM),
				(appMc.DigSeparate.x = k + w + s.w),
				(w = k + w + s.w / 1.5),
				(y += s.w / 1.5)),
			0 < n)
		) {
			for (r = 0; r < n; r++)
				(appMc["DigGS" + r] = new createContainer({ p: a })),
					(s = d[0].frames[t[r] + ".png"].frame),
					(appMc["DigSS" + r] = new createSprite({
						p: appMc["DigGS" + r],
						tex: u,
						x: -0.5 * s.w - s.x,
						y: -1 * s.h - s.y,
						anchor: [0, 0],
					})),
					(appMc["DigSS" + r].tint = j),
					(appMc["DigSM" + r] = new createRect({
						p: appMc["DigGS" + r],
						x: -0.5 * s.w,
						y: -1 * s.h,
						width: s.w,
						height: s.h,
					})),
					(appMc["DigSS" + r].mask = appMc["DigSM" + r]),
					appMc["DigGS" + r].position.set(k + w + s.w, 0),
					(w = k + w + s.w),
					(v += s.w + 0);
			y = y + k * n + x * n;
		}
		return (
			"empty" !== o &&
				((appMc.DigPref = new createContainer({ p: a })),
				(appMc.DigPref._x = p),
				(appMc.DigPref._y = q),
				(appMc.DigPrefS = new createSprite({
					p: appMc.DigPref,
					tex: o,
					anchor: [0, 1],
				})),
				(appMc.DigPref.x = k + w + appMc.DigPrefS.width),
				(w = k + w + appMc.DigPrefS.width),
				(y += appMc.DigPrefS.width)),
			"left" == l
				? a.position.set(f - k, g)
				: "center" == l
				? a.position.set(f - k - y / 2, g)
				: a.position.set(f - k - y, g),
			a.scale.set(h),
			(a.snum = n),
			b.addChild(a),
			(a.update = (b) => {
				let c = b.toFixed(a.snum).toString(),
					e = c.substr(c.length - a.snum);
				0 < a.snum && (c = Math.floor(c));
				let h,
					j,
					p,
					q = ("" + c).split(""),
					r = ("" + e).split(""),
					s = a.children,
					t = 0,
					u = d[0].frames[q[0] + ".png"].frame.w,
					v = k * q.length - 1 + u * q.length;
				for (t = "left" == l ? 0 : 0, h = 0; h < s.length; h++)
					(s[h].visible = !1), s[h].position.set(0, 0);
				for (h = 0; h < q.length; h++)
					(j = d[0].frames[q[h] + ".png"].frame),
						(s[h].visible = !0),
						(s[h].children[0].x = -0.5 * j.w - j.x),
						(s[h].children[0].y = -1 * j.h - j.y),
						s[h].children[1].clear(),
						s[h].children[1].beginFill(16777215, 1),
						s[h].children[1].drawRect(-0.5 * j.w, -1 * j.h, j.w, j.h - 2),
						s[h].children[1].endFill(),
						(s[h].children[0].mask = s[h].children[1]),
						s[h].position.set(k + t + j.w, 0),
						(t = k + t + j.w);
				if (
					(m &&
						((s[10].visible = !0),
						(s[10].x = k + t + j.w / 1.5),
						(t = k + t + j.w / 3),
						(v += j.w / 1.5)),
					0 < a.snum)
				) {
					for (h = 0; h < r.length; h++)
						(j = d[0].frames[r[h] + ".png"].frame),
							(p = s[h + q.length]),
							(p.visible = !0),
							(p.children[0].x = -0.5 * j.w - j.x),
							(p.children[0].y = -1 * j.h - j.y),
							p.children[1].clear(),
							p.children[1].beginFill(16777215, 1),
							p.children[1].drawRect(-0.5 * j.w, -1 * j.h, j.w, j.h - 2),
							p.children[1].endFill(),
							(p.children[0].mask = p.children[1]),
							p.position.set(k + t + j.w, 0),
							(t = k + t + j.w);
					v = v + k * n + u * a.snum;
				}
				"empty" !== o &&
					((s[s.length - 1].visible = !0),
					(s[s.length - 1].x = u + t + s[s.length - 1]._x),
					(s[s.length - 1].y = s[s.length - 1]._y),
					(t = k + t + s[s.length - 1].width),
					(v += s[s.length - 1].width)),
					"left" == l
						? a.position.set(f - k, g)
						: "center" == l
						? a.position.set(f - k - v / 2, g)
						: a.position.set(f - k - v, g);
			}),
			a
		);
	}
}
class createGradient {
	constructor({
		name: a,
		p: b,
		points: c = [0, 1],
		colors: d = ["#000000"],
		x: e = 0,
		y: f = 0,
		w: g = 200,
		h: i = 200,
	}) {
		let h = document.createElement("canvas");
		(h.width = g), (h.height = i);
		let j = h.getContext("2d"),
			k = j.createLinearGradient(g / 2, 0, g / 2, i),
			l = "#000000";
		c.forEach((a, b) => {
			void 0 !== d[b] && (l = d[b]), k.addColorStop(a, l);
		}),
			(j.fillStyle = k),
			j.fillRect(0, 0, g, i);
		let m = PIXI.Texture.from(h);
		return (
			(a = new PIXI.Sprite(m)),
			a.anchor.set(0.5, 0.5),
			a.position.set(e, f),
			b.addChild(a),
			a
		);
	}
}
const SaveObject = (a) => {
		(a.m_x = a.x),
			(a.m_y = a.y),
			(a.m_scaleX = a.scale.x),
			(a.m_scaleY = a.scale.y),
			(a.m_rotation = a.rotation),
			(a.m_alpha = a.alpha),
			(a.m_visible = a.visible),
			(a.gs_an_x = 0),
			(a.gs_an_y = 0),
			(a.gs_an_scaleX = 0),
			(a.gs_an_scaleY = 0),
			(a.gs_an_rotation = 0);
	},
	RebootObject = (a) => {
		gsap.killTweensOf(a),
			gsap.killTweensOf(a.scale),
			(a.x = a.m_x),
			(a.y = a.m_y),
			(a.scale.x = a.m_scaleX),
			(a.scale.y = a.m_scaleY),
			(a.rotation = a.rotation),
			(a.alpha = a.m_alpha),
			(a.visible = a.m_visible);
	},
	DistancePointToPoint = (a, b, c, d) =>
		Math.sqrt((a - c) * (a - c) + (b - d) * (b - d)),
	PlaySound = (a) => {
		appSounds[a].play();
	},
	SortZ = (c, a) => (c._z < a._z ? -1 : c._z > a._z ? 1 : 0),
	InitPixi = () => {
		(appObj.canvasWidth = Math.ceil(window.innerWidth)),
			(appObj.canvasHeight = Math.ceil(window.innerHeight)),
			(AppCanvas.id = "AppCanvas"),
			(AppCanvas.width = appObj.canvasWidth),
			(AppCanvas.height = appObj.canvasHeight),
			(renderer = new PIXI.autoDetectRenderer({
				width: appObj.canvasWidth,
				height: appObj.canvasHeight,
				view: AppCanvas,
				transparent: !0,
				antialias: !1,
			})),
			document.getElementById("pixi").append(renderer.view),
			(stage = new PIXI.Container()),
			stage.position.set(
				Math.ceil(0.5 * appObj.canvasWidth),
				Math.ceil(0.5 * appObj.canvasHeight)
			);
	},
	RandomInteger = (a, b) => {
		let c = a + Math.random() * (b + 1 - a);
		return Math.floor(c);
	};
let idRandomCash = 0;
const aRandomCash = [
		0.55, 0.86, 0.065, 0.408, 0.423, 0.628, 0.672, 0.634, 0.671, 0.794, 0.328,
		0.649, 0.172, 0.531, 0.803, 0.583, 0.528, 0.527, 0.396, 0.153, 0.198, 0.418,
		0.021, 0.712, 0.553, 0.03, 0.811, 0.495, 0.186, 0.119, 0.421, 0.039, 0.889,
		0.345, 0.889, 0.161, 0.931, 0.358, 0.762, 0.254, 0.729, 0.568, 0.979, 0.607,
		0.894, 0.616, 0.841, 0.128, 0.05, 0.856, 0.997, 0.543, 0.841, 0.877, 0.563,
		0.358, 0.853, 0.906, 0.115, 0.339, 0.788, 0.988, 0.326, 0.123, 0.413, 0.308,
		0.723, 0.121, 0.762, 0.916, 0.406, 0.491, 0.942, 0.7, 0.554, 0.958, 0.562,
		0.182, 0.956, 0.056, 0.867, 0.692, 0.26, 0.215, 0.801, 0.668, 0.168, 0.17,
		0.977, 0.876, 0.088, 0.296, 0.116, 0.904, 0.498, 0.056, 0.062, 0.008, 0.335,
		0.392, 0.67, 0.697, 0.647, 0.87, 0.648, 0.529, 0.6, 0.583, 0.689, 0.176,
		0.722, 0.612, 0.005, 0.218, 0.33, 0.401, 0.004, 0.344, 0.066, 0.517, 0.038,
		0.307, 0.183, 0.03, 0.272, 0.591, 0.846, 0.403, 0.581, 0.34, 0.094, 0.49,
		0.167, 0.26, 0.676, 0.344, 0.657, 0.147, 0.134, 0.662, 0.813, 0.213, 0.435,
		0.548, 0.676, 0.628, 0.986, 0.265, 0.539, 0.633, 0.33, 0.947, 0.354, 0.183,
		0.413, 0.479, 0.015, 0.576, 0.606, 0.723, 0.313, 0.43, 0.976, 0.37, 0.745,
		0.328, 0.599, 0.654, 0.037, 0.36, 0.826, 0.725, 0.921, 0.868, 0.503, 0.144,
		0.956, 0.281, 0.961, 0.808, 0.001, 0.206, 0.602, 0.137, 0.587, 0.848, 0.819,
		0.804, 0.857, 0.319, 0.431, 0.723, 0.993, 0.37, 0.738, 0.313, 0.331, 0.728,
		0.809, 0.101, 0.711, 0.482, 0.494, 0.545, 0.502, 0.047, 0.495, 0.224, 0.749,
		0.826, 0.554, 0.459, 0.329, 0.834, 0.239, 0.645, 0.695, 0.824, 0.651, 0.341,
		0.82, 0.724, 0.233, 0.52, 0.968, 0.035, 0.778, 0.7, 0.454, 0.153, 0.677,
		0.025, 0.825, 0.909, 0.027, 0.731, 0.616, 0.158, 0.46, 0.467, 0.23, 0.998,
		0.429, 0.481, 0.028, 0.511, 0.742, 0.379, 0.022, 0.629, 0.039, 0.985, 0.931,
		0.491, 0.057, 0.929, 0.91, 0.599, 0.741, 0.073, 0.388, 0.745, 0.359, 0.581,
		0.065, 0.633, 0.211, 0.005, 0.738, 0.992, 0.621, 0.493, 0.497, 0.575, 0.247,
		0.139, 0.549, 0.122, 0.191, 0.168, 0.329, 0.278, 0.279, 0.706, 0.252, 0.823,
		0.027, 0.592, 0.197, 0.87, 0.498, 0.903, 0.563, 0.043, 0.868, 0.648, 0.123,
		0.171, 0.982, 0.154, 0.758, 0.61, 0.301, 0.385, 0.981, 0.714, 0.69, 0.721,
		0.434, 0.857, 0.814, 0.361, 0.036, 0.672, 0.239, 0.021, 0.22, 0.871, 0.928,
		0.276, 0.846, 0.267, 0.215, 0.05, 0.422, 0.857, 0.279, 0.86, 0.676, 0.134,
		0.908, 0.738, 0.73, 0.094, 0.218, 0.978, 0.873, 0.8, 0.235, 0.059, 0.684,
		0.255, 0.584, 0.392, 0.917, 0.787, 0.431, 0.323, 0.945, 0.568, 0.5, 0.383,
		0.271, 0.613, 0.344, 0.695, 0.652, 0.22, 0.743, 0.022, 0.016, 0.269, 0.242,
		0.022, 0.826, 0.917, 0.338, 0.066, 0.126, 0.048, 0.595, 0.426, 0.604, 0.256,
		0.51, 0.574, 0.895, 0.766, 0.681, 0.717, 0.479, 0.484, 0.879, 0.666, 0.439,
		0.969, 0.542, 0.896, 0.326, 0.402, 0.232, 0.052, 0.913, 0.793, 0.446, 0.535,
		0.939, 0.125, 0.868, 0.393, 0.925, 0.771, 0.685, 0.542, 0.219, 0.051, 0.038,
		0.189, 0.994, 0.14, 0.992, 0.115, 0.046, 0.05, 0.363, 0.524, 0.793, 0.819,
		0.542, 0.173, 0.65, 0.26, 0.743, 0.773, 0.068, 0.141, 0.714, 0.836, 0.83,
		0.592, 0.086, 0.721, 0.87, 0.251, 0.849, 0.812, 0.806, 0.643, 0.878, 0.62,
		0.539, 0.51, 0.632, 0.839, 0.211, 0.838, 0.626, 0.107, 0.478, 0.753, 0.215,
		0.273, 0.647, 0.778, 0.776, 0.108, 0.66, 0.925, 0.751, 0.075, 0.369, 0.463,
		0.319, 0.841, 0.141, 0.064, 0.465, 0.152, 0.768, 0.869, 0.497, 0.822, 0.568,
		0.865, 0.725, 0.22, 0.356, 0.062, 0.843, 0.321, 0.426, 0.662, 0.772, 0.334,
		0.919, 0.747, 0.527, 0.192, 0.754, 0.442, 0.904, 0.029, 0.679, 0.975, 0.326,
		0.481, 0.661, 0.143, 0.21, 0.011, 0.476, 0.648, 0.268, 0.781, 0.262, 0.65,
		0.502, 0.917, 0.833, 0.148, 0.626, 0.898, 0.399, 0.03, 0.201, 0.92, 0.801,
		0.363, 0.354, 0.639, 0.158, 0.039, 0.196, 0.093, 0.677, 0.416, 0.954, 0.379,
		0.276, 0.701, 0.733, 0.148, 0.305, 0.48, 0.8, 0.808, 0.274, 0.553, 0.268,
		0.895, 0.703, 0.979, 0.243, 0.967, 0.857, 0.73, 0.605, 0.2, 0.415, 0.398,
		0.658, 0.363, 0.839, 0.366, 0.451, 0.375, 0.998, 0.532, 0.685, 0.289, 0.649,
		0.125, 0.299, 0.718, 0.903, 0.16, 0.284, 0.114, 0.748, 0.684, 0.455, 0.313,
		0.815, 0.831, 0.83, 0.146, 0.646, 0.707, 0.545, 0.091, 0.143, 0.174, 0.081,
		0.246, 0.001, 0.166, 0.95, 0.891, 0.58, 0.323, 0.56, 0.184, 0.185, 0.703,
		0.286, 0.035, 0.76, 0.255, 0.089, 0.083, 0.193, 0.091, 1, 0.824, 0.326,
		0.029, 0.866, 0.6, 0.905, 0.253, 0.911, 0.529, 0.023, 0.996, 0.21, 0.431,
		0.456, 0.616, 0.087, 0.126, 0.055, 0.023, 0.751, 0.807, 0.437, 0.94, 0.502,
		0.271, 0.267, 0.886, 0.195, 0.342, 0.569, 0.899, 0.421, 0.87, 0.941, 0.83,
		0.111, 0.886, 0.461, 0.165, 0.295, 0.67, 0.298, 0.719, 0.896, 0.266, 0.126,
		0.677, 0.694, 0.098, 0.764, 0.027, 0.182, 0.526, 0.218, 0.07, 0.912, 0.535,
		0.931, 0.717, 0.979, 0.827, 0.827, 0.068, 0.018, 0.99, 0.404, 0.378, 0.121,
		0.266, 0.722, 0.22, 0.333, 0.029, 0.603, 0.372, 0.881, 0.345, 0.35, 0.177,
		0.375, 0.33, 0.697, 0.364, 0.875, 0.976, 0.139, 0.895, 0.083, 0.883, 0.795,
		0.639, 0.53, 0.467, 0.437, 0.556, 0.781, 0.505, 0.956, 0.445, 0.971, 0.077,
		0.065, 0.786, 0.157, 0.039, 0.114, 0.211, 0.929, 0.19, 0.379, 0.797, 0.001,
		0.91, 0.543, 0.792, 0.364, 0.49, 0.534, 0.954, 0.01, 0.484, 0.641, 0.922,
		0.216, 0.732, 0.87, 0.808, 0.07, 0.591, 0.823, 0.805, 0.859, 0.414, 0.789,
		0.791, 0.727, 0.532, 0.296, 0.002, 0.463, 0.877, 0.969, 0.158, 0.27, 0.922,
		0.691, 0.964, 0.59, 0.67, 0.084, 0.435, 0.628, 0.037, 0.631, 0.795, 0.448,
		0.502, 0.568, 0.417, 0.049, 0.154, 0.257, 0.182, 0.536, 0.678, 0.351, 0.3,
		0.5, 0.301, 0.779, 0.8, 0.685, 0.458, 0.576, 0.888, 0.04, 0.053, 0.855,
		0.171, 0.872, 0.521, 0.118, 0.972, 0.301, 0.651, 0.863, 0.009, 0.907, 0.447,
		0.981, 0.534, 0.559, 0.508, 0.216, 0.098, 0.583, 0.792, 0.659, 0.357, 0.819,
		0.334, 0.256, 0.553, 0.675, 0.158, 0.637, 0.748, 0.297, 0.17, 0.332, 0.817,
		0.057, 0.154, 0.282, 0.299, 0.678, 0.626, 0.731, 0.134, 0.882, 0.562, 0.817,
		0.672, 0.819, 0.671, 0.607, 0.219, 0.399, 0.51, 0.179, 0.821, 0.612, 0.646,
		0.204, 0.769, 0.489, 0.177, 0.654, 0.021, 0.178, 0.393, 0.732, 0.203, 0.43,
		0.645, 0.917, 0.325, 0.209, 0.221, 0.947, 0.158, 0.922, 0.072, 0.153, 0.07,
		0.734, 0.316, 0.871, 0.067, 0.295, 0.244, 0.217, 0.109, 0.83, 0.736, 0.042,
		0.332, 0.623, 0.625, 0.697, 0.032, 0.809, 0.861, 0.385, 0.562, 0.76, 0.171,
		0.8, 0.947, 0.059, 0.243, 0.445, 0.924, 0.884, 0.616, 0.612, 0.027, 0.721,
		0.611, 0.736, 0.658, 0.352, 0.82, 0.71, 0.245, 0.656, 0.456, 0.766, 0.513,
		0.596, 0.467, 0.29, 0.532, 0.562, 0.985, 0.314, 0.099, 0.204, 0.014, 0.084,
		0.543, 0.6, 0.238, 0.714, 0.015, 0.928, 0.493, 0.127, 0.78, 0.68, 0.88,
		0.198, 0.113, 0.857, 0.371, 0.153, 0.344, 0.36, 0.653, 0.731, 0.845, 0.651,
		0.532, 0.894, 0.321, 0.23, 0.876, 0.117, 0.52, 0.128, 0.793, 0.323, 0.999,
		0.732, 0.45, 0.348, 0.995, 0.014, 0.554, 0.474, 0.121, 0.803, 0.247, 0.929,
		0.398, 0.298, 0.871, 0.287, 0.055, 0.082, 0.89, 0.892, 0.467, 0.132, 0.251,
		0.212, 0.999, 0.773, 0.556, 0.621, 0.014, 0.875, 0.694, 0.3, 0.165, 0.552,
		0.574, 0.911, 0.708, 0.714, 0.328, 0.756, 0.658, 0.752, 0.126, 0.762, 0.631,
		0.198, 0.154, 0.797, 0.717, 0.764, 0.654, 0.559, 0.127, 0.543, 0.669,
	],
	RandomCash = () => (
		idRandomCash++,
		idRandomCash == aRandomCash.length && (idRandomCash = 0),
		aRandomCash[idRandomCash]
	);
let seedRandom = 6;
const Random = (a) => {
		(a = a || 1), (seedRandom = (9301 * seedRandom + 49297) % 233280);
		let b = seedRandom / 233280;
		return (b = Math.round(b * a)), b == a && b--, b;
	},
	MixArray = (a) => {
		for (let b, c, d = a.length; 0 !== d; )
			(c = Math.floor(Math.random() * d)),
				(d -= 1),
				(b = a[d]),
				(a[d] = a[c]),
				(a[c] = b);
		return a;
	},
	isSafari = () => {
		let a = navigator.userAgent.toLowerCase();
		return -1 != a.indexOf("safari") && !(-1 < a.indexOf("chrome"));
	};
let raf_lastTime = 0,
	raf_vendors = ["ms", "moz", "webkit", "o"];
for (var x = 0; x < raf_vendors.length && !window.requestAnimationFrame; ++x)
	(window.requestAnimationFrame =
		window[raf_vendors[x] + "RequestAnimationFrame"]),
		(window.cancelAnimationFrame =
			window[raf_vendors[x] + "CancelAnimationFrame"] ||
			window[raf_vendors[x] + "CancelRequestAnimationFrame"]);
window.requestAnimationFrame ||
	(window.requestAnimationFrame = function (a) {
		let b = new Date().getTime(),
			c = Math.max(0, 16 - (b - raf_lastTime)),
			d = window.setTimeout(function () {
				a(b + c);
			}, c);
		return (raf_lastTime = b + c), d;
	}),
	window.cancelAnimationFrame ||
		(window.cancelAnimationFrame = function (a) {
			clearTimeout(a);
		});
let hidden, state, visibilityChange;
"undefined" == typeof document.hidden
	? "undefined" == typeof document.mozHidden
		? "undefined" == typeof document.msHidden
			? "undefined" != typeof document.webkitHidden &&
			  ((hidden = "webkitHidden"),
			  (visibilityChange = "webkitvisibilitychange"),
			  (state = "webkitVisibilityState"))
			: ((hidden = "msHidden"),
			  (visibilityChange = "msvisibilitychange"),
			  (state = "msVisibilityState"))
		: ((hidden = "mozHidden"),
		  (visibilityChange = "mozvisibilitychange"),
		  (state = "mozVisibilityState"))
	: ((hidden = "hidden"),
	  (visibilityChange = "visibilitychange"),
	  (state = "visibilityState"));

const canvasVisibilityChange = () => {
	if (document[hidden] || document[state] == "hidden") {
		try {
			Howler.mute(true);
		} catch (e) {}
	} else {
		if (isGlobalSound) {
			Howler.mute(false);
		}
	}
};

document.addEventListener(visibilityChange, canvasVisibilityChange, false);
window.addEventListener(visibilityChange, canvasVisibilityChange, false);
