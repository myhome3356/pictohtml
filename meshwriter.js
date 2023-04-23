/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Babylon MeshWriter
 * https://github.com/briantbutton/meshwriter
 * (c) 2018-2021 Brian Todd Button
 * Released under the MIT license
 */

// *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
// This function loads the specific type-faces and returns the superconstructor
// If BABYLON is loaded, it assigns the superconstructor to BABYLON.MeshWriter
// Otherwise it assigns it to global variable 'BABYLONTYPE'
//
// Note to developers:  Helvetica Neue Medium is assumed, by the code, to be present
//                      Do NOT remove it during customization

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (HNM, CNW) {
  // >>>>>  STEP 1 <<<<<

  var scene,
    FONTS,
    defaultColor,
    defaultOpac,
    naturalLetterHeight,
    curveSampleSize,
    Γ = Math.floor,
    hnm,
    cnw,
    debug;
  var b128back, b128digits;
  var earcut = __webpack_require__(4);
  var B = {},
    methodsList = [
      "Vector2",
      "Vector3",
      "Path2",
      "Curve3",
      "Color3",
      "SolidParticleSystem",
      "PolygonMeshBuilder",
      "CSG",
      "StandardMaterial",
      "Mesh",
    ];
  prepArray();
  // >>>>>  STEP 2 <<<<<
  hnm = HNM(codeList); // Do not remove
  cnw = CNW(codeList);
  // >>>>>  STEP 2 <<<<<
  FONTS = {};
  // >>>>>  STEP 3 <<<<<
  FONTS["jura-demibold"] = hnm; // Do not remove
  FONTS["yahei"] = cnw;
  // >>>>>  STEP 3 <<<<<
  defaultColor = "#808080";
  defaultOpac = 1;
  curveSampleSize = 6;
  naturalLetterHeight = 1000;

  // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
  //  SUPERCONSTRUCTOR  SUPERCONSTRUCTOR  SUPERCONSTRUCTOR
  // Parameters:
  //   ~ scene
  //   ~ preferences

  var Wrapper = function () {
    var proto, defaultFont, scale, meshOrigin, preferences;

    scene = arguments[0];
    preferences = makePreferences(arguments);

    defaultFont = isObject(FONTS[preferences.defaultFont])
      ? preferences.defaultFont
      : "jura-demibold";
    meshOrigin =
      preferences.meshOrigin === "fontOrigin"
        ? preferences.meshOrigin
        : "letterCenter";
    scale = isNumber(preferences.scale) ? preferences.scale : 1;
    debug = isBoolean(preferences.debug) ? preferences.debug : false;

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    //  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR
    // Called with 'new'
    // Parameters:
    //   ~ letters
    //   ~ options

    function MeshWriter(lttrs, opt) {
      var material,
        meshesAndBoxes,
        offsetX,
        meshes,
        lettersBoxes,
        lettersOrigins,
        combo,
        sps,
        mesh,
        xWidth;

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
      // Here we set ALL parameters with incoming value or a default
      // setOption:  applies a test to potential incoming parameters
      //             if the test passes, the parameters are used, else the default is used
      var options = isObject(opt) ? opt : {},
        position = setOption(options, "position", isObject, {}),
        colors = setOption(options, "colors", isObject, {}),
        fontFamily = setOption(
          options,
          "font-family",
          isSupportedFont,
          defaultFont
        ),
        anchor = setOption(options, "anchor", isSupportedAnchor, "left"),
        rawheight = setOption(options, "letter-height", isPositiveNumber, 100),
        rawThickness = setOption(
          options,
          "letter-thickness",
          isPositiveNumber,
          1
        ),
        basicColor = setOption(options, "color", isString, defaultColor),
        opac = setOption(options, "alpha", isAmplitude, defaultOpac),
        y = setOption(position, "y", isNumber, 0),
        x = setOption(position, "x", isNumber, 0),
        z = setOption(position, "z", isNumber, 0),
        diffuse = setOption(colors, "diffuse", isString, "#F0F0F0"),
        specular = setOption(colors, "specular", isString, "#000000"),
        ambient = setOption(colors, "ambient", isString, "#F0F0F0"),
        emissive = setOption(colors, "emissive", isString, basicColor),
        fontSpec = FONTS[fontFamily],
        letterScale = round((scale * rawheight) / naturalLetterHeight),
        thickness = round(scale * rawThickness),
        letters = isString(lttrs) ? lttrs : "";

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
      // Now all the parameters are set, let's get to business
      // First create the material
      material = makeMaterial(
        scene,
        letters,
        emissive,
        ambient,
        specular,
        diffuse,
        opac
      );

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
      // Next, create the meshes
      // This creates an array of meshes, one for each letter
      // It also creates two other arrays, which are used for letter positioning
      meshesAndBoxes = constructLetterPolygons(
        letters,
        fontSpec,
        0,
        0,
        0,
        letterScale,
        thickness,
        material,
        meshOrigin
      );
      meshes = meshesAndBoxes[0];
      lettersBoxes = meshesAndBoxes[1];
      lettersOrigins = meshesAndBoxes[2];
      xWidth = meshesAndBoxes.xWidth;

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
      // The meshes are converted into particles of an SPS
      combo = makeSPS(scene, meshesAndBoxes, material);
      sps = combo[0];
      mesh = combo[1];

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
      // Set the final SPS-mesh position according to parameters
      offsetX =
        anchor === "right"
          ? 0 - xWidth
          : anchor === "center"
          ? 0 - xWidth / 2
          : 0;
      mesh.position.x = scale * x + offsetX;
      mesh.position.y = scale * y;
      mesh.position.z = scale * z;

      this.getSPS = () => sps;
      this.getMesh = () => mesh;
      this.getMaterial = () => material;
      this.getOffsetX = () => offsetX;
      this.getLettersBoxes = () => lettersBoxes;
      this.getLettersOrigins = () => lettersOrigins;
      this.color = (c) => (isString(c) ? (color = c) : color);
      this.alpha = (o) => (isAmplitude(o) ? (opac = o) : opac);
      this.clearall = function () {
        sps = null;
        mesh = null;
        material = null;
      };
    }
    //  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR
    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

    proto = MeshWriter.prototype;

    proto.setColor = function (color) {
      var material = this.getMaterial();
      if (isString(color)) {
        material.emissiveColor = rgb2Bcolor3(this.color(color));
      }
    };
    proto.setAlpha = function (alpha) {
      var material = this.getMaterial();
      if (isAmplitude(alpha)) {
        material.alpha = this.alpha(alpha);
      }
    };
    proto.overrideAlpha = function (alpha) {
      var material = this.getMaterial();
      if (isAmplitude(alpha)) {
        material.alpha = alpha;
      }
    };
    proto.resetAlpha = function () {
      var material = this.getMaterial();
      material.alpha = this.alpha();
    };
    proto.getLetterCenter = function (ix) {
      return new B.Vector2(0, 0);
    };
    proto.dispose = function () {
      var mesh = this.getMesh(),
        sps = this.getSPS(),
        material = this.getMaterial();
      if (sps) {
        sps.dispose();
      }
      this.clearall();
    };
    MeshWriter.codeList = codeList;
    MeshWriter.decodeList = decodeList;

    return MeshWriter;
  };
  if (typeof window !== "undefined") {
    window.TYPE = Wrapper;
    window.MeshWriter = Wrapper;
  }
  if (typeof global !== "undefined") {
    global.MeshWriter = Wrapper;
  }
  if (typeof BABYLON === "object") {
    cacheMethods(BABYLON);
    BABYLON.MeshWriter = Wrapper;
  }
  if ( true && module.exports) {
    module.exports = Wrapper;
  }
  return Wrapper;

  //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
  // MakeSPS turns the output of constructLetterPolygons into an SPS
  // with the whole string, with appropriate offsets
  function makeSPS(scene, meshesAndBoxes, material) {
    var meshes = meshesAndBoxes[0],
      lettersOrigins = meshesAndBoxes[2],
      sps,
      spsMesh;
    if (meshes.length) {
      sps = new B.SolidParticleSystem("sps" + "test", scene, {});
      meshes.forEach(function (mesh, ix) {
        sps.addShape(mesh, 1, {
          positionFunction: makePositionParticle(lettersOrigins[ix]),
        });
        mesh.dispose();
      });
      spsMesh = sps.buildMesh();
      spsMesh.material = material;
      sps.setParticles();
    }
    return [sps, spsMesh];

    function makePositionParticle(letterOrigins) {
      return function positionParticle(particle, ix, s) {
        particle.position.x = letterOrigins[0] + letterOrigins[1];
        particle.position.z = letterOrigins[2];
      };
    }
  }

  //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
  // Takes specifications and returns an array with three elements, each of which
  // is an array (length of each array === the number of incoming characters)
  //   ~ the meshes (not offset by position)
  //   ~ the boxes (to help with positions features)
  //   ~ the letter origins (providing offset for each letter)
  function constructLetterPolygons(
    letters,
    fontSpec,
    xOffset,
    yOffset,
    zOffset,
    letterScale,
    thickness,
    material,
    meshOrigin
  ) {
    var letterOffsetX = 0,
      lettersOrigins = new Array(letters.length),
      lettersBoxes = new Array(letters.length),
      lettersMeshes = new Array(letters.length),
      ix = 0,
      letter,
      letterSpec,
      lists,
      shapesList,
      holesList,
      letterMeshes,
      letterBox,
      letterOrigins,
      meshesAndBoxes,
      i;

    for (i = 0; i < letters.length; i++) {
      letter = letters[i];
      letterSpec = makeLetterSpec(fontSpec, letter);
      if (isObject(letterSpec)) {
        lists = buildLetterMeshes(
          letter,
          i,
          letterSpec,
          fontSpec.reverseShapes,
          fontSpec.reverseHoles
        );
        shapesList = lists[0];
        holesList = lists[1];
        letterBox = lists[2];
        letterOrigins = lists[3];

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // This subtracts the holes, if any, from the shapes and merges the shapes
        // (Many glyphs - 'i', '%' - have multiple shapes)
        // At the end, there is one mesh per glyph, as God intended
        letterMeshes = punchHolesInShapes(shapesList, holesList);
        if (letterMeshes.length) {
          lettersMeshes[ix] = merge(letterMeshes);
          lettersOrigins[ix] = letterOrigins;
          lettersBoxes[ix] = letterBox;
          ix++;
        }
      }
    }
    meshesAndBoxes = [lettersMeshes, lettersBoxes, lettersOrigins];
    meshesAndBoxes.xWidth = round(letterOffsetX);
    meshesAndBoxes.count = ix;
    return meshesAndBoxes;

    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
    // A letter may have one or more shapes and zero or more holes
    // The shapeCmds is an array of shapes
    // The holeCmds is an array of array of holes, the outer array lining up with
    // the shapes array and the inner array permitting more than one hole per shape
    // (Think of the letter 'B', with one shape and two holes, or the symbol
    // '%' which has three shapes and two holes)
    //
    // For mystifying reasons, the holeCmds (provided by the font) must be reversed
    // from the original order and the shapeCmds must *not* be reversed
    // UNLESS the font is Jura, in which case the holeCmds are not reversed
    // (Possibly because the Jura source is .otf, and the others are .ttf)
    //
    // *WARNING*                                                         *WARNING*
    // buildLetterMeshes performs a lot of arithmetic for offsets to support
    // symbol reference points, BABYLON idiocyncracies, font idiocyncracies,
    // symbol size normalization, the way curves are specified and "relative"
    // coordinates.  (Fonts use fixed coordinates but many other SVG-style
    // symbols use relative coordinates)
    // *WARNING*                                                         *WARNING*
    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =

    function buildLetterMeshes(
      letter,
      index,
      spec,
      reverseShapes,
      reverseHoles
    ) {
      // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
      // A large number of offsets are created, per warning
      var balanced = meshOrigin === "letterCenter",
        centerX = (spec.xMin + spec.xMax) / 2,
        centerZ = (spec.yMin + spec.yMax) / 2,
        xFactor = isNumber(spec.xFactor) ? spec.xFactor : 1,
        zFactor = isNumber(spec.yFactor) ? spec.yFactor : 1,
        xShift = isNumber(spec.xShift) ? spec.xShift : 0,
        zShift = isNumber(spec.yShift) ? spec.yShift : 0,
        reverseShape = isBoolean(spec.reverseShape)
          ? spec.reverseShape
          : reverseShapes,
        reverseHole = isBoolean(spec.reverseHole)
          ? spec.reverseHole
          : reverseHoles,
        offX = xOffset - (balanced ? centerX : 0),
        offZ = zOffset - (balanced ? centerZ : 0),
        shapeCmdsLists = isArray(spec.shapeCmds) ? spec.shapeCmds : [],
        holeCmdsListsArray = isArray(spec.holeCmds) ? spec.holeCmds : [],
        letterBox,
        letterOrigins;

      // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
      // Several scaling functions are created too, per warning
      var adjX = makeAdjust(letterScale, xFactor, offX, 0, false, true), // no shift
        adjZ = makeAdjust(letterScale, zFactor, offZ, 0, false, false),
        adjXfix = makeAdjust(letterScale, xFactor, offX, xShift, false, true), // shifted / fixed
        adjZfix = makeAdjust(letterScale, zFactor, offZ, zShift, false, false),
        adjXrel = makeAdjust(letterScale, xFactor, offX, xShift, true, true), // shifted / relative
        adjZrel = makeAdjust(letterScale, zFactor, offZ, zShift, true, false),
        thisX,
        lastX,
        thisZ,
        lastZ,
        minX = NaN,
        maxX = NaN,
        minZ = NaN,
        maxZ = NaN,
        minXadj = NaN,
        maxXadj = NaN,
        minZadj = NaN,
        maxZadj = NaN;

      letterBox = [
        adjX(spec.xMin),
        adjX(spec.xMax),
        adjZ(spec.yMin),
        adjZ(spec.yMax),
      ];
      letterOrigins = [round(letterOffsetX), -1 * adjX(0), -1 * adjZ(0)];

      // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
      // Scope warning:  letterOffsetX belongs to an outer closure
      // and persists through multiple characters
      letterOffsetX = letterOffsetX + spec.wdth * letterScale;

      if (debug && spec.show) {
        console.log([minX, maxX, minZ, maxZ]);
        console.log([minXadj, maxXadj, minZadj, maxZadj]);
      }

      return [
        shapeCmdsLists.map(makeCmdsToMesh(reverseShape)),
        holeCmdsListsArray.map(meshesFromCmdsListArray),
        letterBox,
        letterOrigins,
      ];

      function meshesFromCmdsListArray(cmdsListArray) {
        return cmdsListArray.map(makeCmdsToMesh(reverseHole));
      }
      function makeCmdsToMesh(reverse) {
        return function cmdsToMesh(cmdsList) {
          var cmd = getCmd(cmdsList, 0),
            path = new B.Path2(adjXfix(cmd[0]), adjZfix(cmd[1])),
            array,
            meshBuilder,
            j,
            last,
            first = 0;

          // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
          // Array length is used to determine curve type in the 'TheLeftover Font Format'  (TLFF)
          //
          // IDIOCYNCRACY:  Odd-length arrays indicate relative coordinates; the first digit is discarded

          for (j = 1; j < cmdsList.length; j++) {
            cmd = getCmd(cmdsList, j);

            // ~  ~  ~  ~  ~  ~  ~  ~
            // Line
            if (cmd.length === 2) {
              path.addLineTo(adjXfix(cmd[0]), adjZfix(cmd[1]));
            }
            if (cmd.length === 3) {
              path.addLineTo(adjXrel(cmd[1]), adjZrel(cmd[2]));
            }

            // ~  ~  ~  ~  ~  ~  ~  ~
            // Quadratic curve
            if (cmd.length === 4) {
              path.addQuadraticCurveTo(
                adjXfix(cmd[0]),
                adjZfix(cmd[1]),
                adjXfix(cmd[2]),
                adjZfix(cmd[3])
              );
            }
            if (cmd.length === 5) {
              path.addQuadraticCurveTo(
                adjXrel(cmd[1]),
                adjZrel(cmd[2]),
                adjXrel(cmd[3]),
                adjZrel(cmd[4])
              );
            }

            // ~  ~  ~  ~  ~  ~  ~  ~
            // Cubic curve
            if (cmd.length === 6) {
              path.addCubicCurveTo(
                adjXfix(cmd[0]),
                adjZfix(cmd[1]),
                adjXfix(cmd[2]),
                adjZfix(cmd[3]),
                adjXfix(cmd[4]),
                adjZfix(cmd[5])
              );
            }
            if (cmd.length === 7) {
              path.addCubicCurveTo(
                adjXrel(cmd[1]),
                adjZrel(cmd[2]),
                adjXrel(cmd[3]),
                adjZrel(cmd[4]),
                adjXrel(cmd[5]),
                adjZrel(cmd[6])
              );
            }
          }
          // Having created a Path2 instance with BABYLON utilities,
          // we turn it into an array and discard it
          array = path.getPoints().map(point2Vector);

          // Sometimes redundant coordinates will cause artifacts - delete them!
          last = array.length - 1;
          if (
            array[first].x === array[last].x &&
            array[first].y === array[last].y
          ) {
            array = array.slice(1);
          }
          if (reverse) {
            array.reverse();
          }

          meshBuilder = new B.PolygonMeshBuilder(
            "MeshWriter-" + letter + index + "-" + weeid(),
            array,
            scene,
            earcut
          );
          return meshBuilder.build(true, thickness);
        };
      }
      function getCmd(list, ix) {
        var cmd, len;
        lastX = thisX;
        lastZ = thisZ;
        cmd = list[ix];
        len = cmd.length;
        thisX = isRelativeLength(len)
          ? round(cmd[len - 2] * xFactor + thisX)
          : round(cmd[len - 2] * xFactor);
        thisZ = isRelativeLength(len)
          ? round(cmd[len - 1] * zFactor + thisZ)
          : round(cmd[len - 1] * zFactor);
        minX = thisX > minX ? minX : thisX;
        maxX = thisX < maxX ? maxX : thisX;
        minXadj = thisX + xShift > minXadj ? minXadj : thisX + xShift;
        maxXadj = thisX + xShift < maxXadj ? maxXadj : thisX + xShift;
        minZ = thisZ > minZ ? minZ : thisZ;
        maxZ = thisZ < maxZ ? maxZ : thisZ;
        minZadj = thisZ + zShift > minZadj ? minZadj : thisZ + zShift;
        maxZadj = thisZ + zShift < maxZadj ? maxZadj : thisZ + zShift;
        return cmd;
      }

      // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
      // Returns the a scaling function, based on incoming parameters
      function makeAdjust(letterScale, factor, off, shift, relative, xAxis) {
        if (relative) {
          if (xAxis) {
            return (val) =>
              round(letterScale * (val * factor + shift + lastX + off));
          } else {
            return (val) =>
              round(letterScale * (val * factor + shift + lastZ + off));
          }
        } else {
          return (val) => round(letterScale * (val * factor + shift + off));
        }
      }
    }

    // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
    function punchHolesInShapes(shapesList, holesList) {
      var letterMeshes = [],
        j;
      for (j = 0; j < shapesList.length; j++) {
        let shape = shapesList[j];
        let holes = holesList[j];
        if (isArray(holes) && holes.length) {
          letterMeshes.push(punchHolesInShape(shape, holes, letter, i));
        } else {
          letterMeshes.push(shape);
        }
      }
      return letterMeshes;
    }
    function punchHolesInShape(shape, holes, letter, i) {
      var csgShape = B.CSG.FromMesh(shape),
        k;
      for (k = 0; k < holes.length; k++) {
        csgShape = csgShape.subtract(B.CSG.FromMesh(holes[k]));
      }
      holes.forEach((h) => h.dispose());
      shape.dispose();
      return csgShape.toMesh("Net-" + letter + i + "-" + weeid(), null, scene);
    }
  }

  function makeMaterial(
    scene,
    letters,
    emissive,
    ambient,
    specular,
    diffuse,
    opac
  ) {
    var cm0 = new B.StandardMaterial(
      "mw-matl-" + letters + "-" + weeid(),
      scene
    );
    cm0.diffuseColor = rgb2Bcolor3(diffuse);
    cm0.specularColor = rgb2Bcolor3(specular);
    cm0.ambientColor = rgb2Bcolor3(ambient);
    cm0.emissiveColor = rgb2Bcolor3(emissive);
    cm0.alpha = opac;
    return cm0;
  }

  // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
  //     FONT COMPRESSING AND DECOMPRESSING     FONT COMPRESSING AND DECOMPRESSING
  //
  // One can reduce file size by 50% with a content-specific compression of font strings
  // Each letter object potentially has two long values, "shapeCmds" and "holeCmds"
  // These may be optionally compressed during construction of the file
  // The compressed versions are placed in "sC" and "hC"
  // The *first* time a letter is used, if it was compressed, it is decompressed
  function makeLetterSpec(fontSpec, letter) {
    var letterSpec = fontSpec[letter],
      singleMap = (cmds) => decodeList(cmds),
      doubleMap = (cmdslists) =>
        isArray(cmdslists) ? cmdslists.map(singleMap) : cmdslists;

    if (isObject(letterSpec)) {
      if (!isArray(letterSpec.shapeCmds) && isArray(letterSpec.sC)) {
        letterSpec.shapeCmds = letterSpec.sC.map(singleMap);
        letterSpec.sC = null;
      }
      if (!isArray(letterSpec.holeCmds) && isArray(letterSpec.hC)) {
        letterSpec.holeCmds = letterSpec.hC.map(doubleMap);
        letterSpec.hC = null;
      }
    }
    return letterSpec;
  }

  function decodeList(str) {
    var split = str.split(" "),
      list = [];
    split.forEach(function (cmds) {
      if (cmds.length === 12) {
        list.push(decode6(cmds));
      }
      if (cmds.length === 8) {
        list.push(decode4(cmds));
      }
      if (cmds.length === 4) {
        list.push(decode2(cmds));
      }
    });
    return list;
    function decode6(s) {
      return [
        decode1(s, 0, 2),
        decode1(s, 2, 4),
        decode1(s, 4, 6),
        decode1(s, 6, 8),
        decode1(s, 8, 10),
        decode1(s, 10, 12),
      ];
    }
    function decode4(s) {
      return [
        decode1(s, 0, 2),
        decode1(s, 2, 4),
        decode1(s, 4, 6),
        decode1(s, 6, 8),
      ];
    }
    function decode2(s) {
      return [decode1(s, 0, 2), decode1(s, 2, 4)];
    }
    function decode1(s, start, end) {
      return (frB128(s.substring(start, end)) - 4000) / 2;
    }
  }
  function codeList(list) {
    var str = "",
      xtra = "";
    if (isArray(list)) {
      list.forEach(function (cmds) {
        if (cmds.length === 6) {
          str += xtra + code6(cmds);
          xtra = " ";
        }
        if (cmds.length === 4) {
          str += xtra + code4(cmds);
          xtra = " ";
        }
        if (cmds.length === 2) {
          str += xtra + code2(cmds);
          xtra = " ";
        }
      });
    }
    return str;

    function code6(a) {
      return (
        code1(a[0]) +
        code1(a[1]) +
        code1(a[2]) +
        code1(a[3]) +
        code1(a[4]) +
        code1(a[5])
      );
    }
    function code4(a) {
      return code1(a[0]) + code1(a[1]) + code1(a[2]) + code1(a[3]);
    }
    function code2(a) {
      return code1(a[0]) + code1(a[1]);
    }
    function code1(n) {
      return toB128(n + n + 4000);
    }
  }

  function frB128(s) {
    var result = 0,
      i = -1,
      l = s.length - 1;
    while (i++ < l) {
      result = result * 128 + b128back[s.charCodeAt(i)];
    }
    return result;
  }
  function toB128(i) {
    var s = b128digits[i % 128];
    i = Γ(i / 128);
    while (i > 0) {
      s = b128digits[i % 128] + s;
      i = Γ(i / 128);
    }
    return s;
  }
  function prepArray() {
    var pntr = -1,
      n;
    b128back = new Uint8Array(256);
    b128digits = new Array(128);
    while (160 > pntr++) {
      if (pntr < 128) {
        n = fr128to256(pntr);
        b128digits[pntr] = String.fromCharCode(n);
        b128back[n] = pntr;
      } else {
        if (pntr === 128) {
          b128back[32] = pntr;
        } else {
          b128back[pntr + 71] = pntr;
        }
      }
    }
    function fr128to256(n) {
      if (n < 92) {
        return n < 58 ? (n < 6 ? n + 33 : n + 34) : n + 35;
      } else {
        return n + 69;
      }
    }
  }
  //     FONT COMPRESSING AND DECOMPRESSING     FONT COMPRESSING AND DECOMPRESSING
  // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

  // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
  //     PARAMETER QUALIFYING AND DEFAULTING     PARAMETER QUALIFYING AND DEFAULTING
  //
  // Screening and defaulting functions for incoming parameters
  function makePreferences(args) {
    var prefs = {},
      p;
    if (isObject((p = args[1]))) {
      if (p["default-font"]) {
        prefs.defaultFont = p["default-font"];
      } else {
        if (p.defaultFont) {
          prefs.defaultFont = p.defaultFont;
        }
      }
      if (p["mesh-origin"]) {
        prefs.meshOrigin = p["mesh-origin"];
      } else {
        if (p.meshOrigin) {
          prefs.meshOrigin = p.meshOrigin;
        }
      }
      if (p.scale) {
        prefs.scale = p.scale;
      }
      if (isBoolean(p.debug)) {
        prefs.debug = p.debug;
      }
      cacheMethods(p.methods);
      return prefs;
    } else {
      return { defaultFont: args[2], scale: args[1], debug: false };
    }
  }
  function cacheMethods(src) {
    var incomplete = false;
    if (isObject(src)) {
      methodsList.forEach(function (meth) {
        if (isObject(src[meth])) {
          B[meth] = src[meth];
        } else {
          incomplete = meth;
        }
      });
      if (!incomplete) {
        supplementCurveFunctions();
      }
    }
    if (isString(incomplete)) {
      throw new Error("Missing method '" + incomplete + "'");
    }
  }

  // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
  // Needed for making font curves
  // Thanks Gijs, wherever you are
  //
  function supplementCurveFunctions() {
    if (isObject(B.Path2)) {
      if (!B.Path2.prototype.addQuadraticCurveTo) {
        B.Path2.prototype.addQuadraticCurveTo = function (
          redX,
          redY,
          blueX,
          blueY
        ) {
          var points = this.getPoints();
          var lastPoint = points[points.length - 1];
          var origin = new B.Vector3(lastPoint.x, lastPoint.y, 0);
          var control = new B.Vector3(redX, redY, 0);
          var destination = new B.Vector3(blueX, blueY, 0);
          var nb_of_points = curveSampleSize;
          var curve = B.Curve3.CreateQuadraticBezier(
            origin,
            control,
            destination,
            nb_of_points
          );
          var curvePoints = curve.getPoints();
          for (var i = 1; i < curvePoints.length; i++) {
            this.addLineTo(curvePoints[i].x, curvePoints[i].y);
          }
        };
      }
      if (!B.Path2.prototype.addCubicCurveTo) {
        B.Path2.prototype.addCubicCurveTo = function (
          redX,
          redY,
          greenX,
          greenY,
          blueX,
          blueY
        ) {
          var points = this.getPoints();
          var lastPoint = points[points.length - 1];
          var origin = new B.Vector3(lastPoint.x, lastPoint.y, 0);
          var control1 = new B.Vector3(redX, redY, 0);
          var control2 = new B.Vector3(greenX, greenY, 0);
          var destination = new B.Vector3(blueX, blueY, 0);
          var nb_of_points = Math.floor(0.3 + curveSampleSize * 1.5);
          var curve = B.Curve3.CreateCubicBezier(
            origin,
            control1,
            control2,
            destination,
            nb_of_points
          );
          var curvePoints = curve.getPoints();
          for (var i = 1; i < curvePoints.length; i++) {
            this.addLineTo(curvePoints[i].x, curvePoints[i].y);
          }
        };
      }
    }
  }
  //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
  // Applies a test to potential incoming parameters
  // If the test passes, the parameters are used, otherwise the default is used
  function setOption(opts, field, tst, defalt) {
    return tst(opts[field]) ? opts[field] : defalt;
  }

  //     PARAMETER QUALIFYING AND DEFAULTING     PARAMETER QUALIFYING AND DEFAULTING
  // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

  // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
  // Conversion functions
  function rgb2Bcolor3(rgb) {
    rgb = rgb.replace("#", "");
    return new B.Color3(
      convert(rgb.substring(0, 2)),
      convert(rgb.substring(2, 4)),
      convert(rgb.substring(4, 6))
    );
    function convert(x) {
      return (
        Γ(
          1000 *
            Math.max(
              0,
              Math.min(
                (isNumber(parseInt(x, 16)) ? parseInt(x, 16) : 0) / 255,
                1
              )
            )
        ) / 1000
      );
    }
  }
  function point2Vector(point) {
    return new B.Vector2(round(point.x), round(point.y));
  }
  function merge(arrayOfMeshes) {
    return arrayOfMeshes.length === 1
      ? arrayOfMeshes[0]
      : B.Mesh.MergeMeshes(arrayOfMeshes, true);
  }

  // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
  // Boolean test functions
  function isPositiveNumber(mn) {
    return typeof mn === "number" && !isNaN(mn) ? 0 < mn : false;
  }
  function isNumber(mn) {
    return typeof mn === "number";
  }
  function isBoolean(mn) {
    return typeof mn === "boolean";
  }
  function isAmplitude(ma) {
    return typeof ma === "number" && !isNaN(ma) ? 0 <= ma && ma <= 1 : false;
  }
  function isObject(mo) {
    return (mo != null && typeof mo === "object") || typeof mo === "function";
  }
  function isArray(ma) {
    return ma != null && typeof ma === "object" && ma.constructor === Array;
  }
  function isString(ms) {
    return typeof ms === "string" ? ms.length > 0 : false;
  }
  function isSupportedFont(ff) {
    return isObject(FONTS[ff]);
  }
  function isSupportedAnchor(a) {
    return a === "left" || a === "right" || a === "center";
  }
  function isRelativeLength(l) {
    return l === 3 || l === 5 || l === 7;
  }
  function weeid() {
    return Math.floor(Math.random() * 1000000);
  }
  function round(n) {
    return Γ(0.3 + n * 1000000) / 1000000;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  JURA  JURA  JURA
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:true,reverseShapes:false},nbsp=' ';

      font["a"]        = {
        sC             : [
                           'F&E¸ CgE¸B9EWB9C= B9AÄB½ABCÀAB ESAB F`ABGaA`H2B" H2A¯ H2A@H^A4HzA4 HµA4I?A>I?A© I?FH I?GwH·HFGiHF E9HF CUHFB9G¾B9Fn B9F"BcE¸B~E¸ C8E¸CEF<CEFn CEG%CwG9EGG9 GZG9 GÄG9H2G(H2Fh H2E¸'
                         ],
        hC             : [
                           ['H2D¬ H2C«G¸BNESBN CÀBN CyBNCEB|CEC4 CEDvC²D¬F&D¬']
                         ],
        xMin           : 59.5,
        xMax           : 510.5,
        yMin           : -7,
        yMax           : 450,
        wdth           : 580
      };
      font["b"]        = {
        sC             : [
                           'CbGe CbJP CbJ³CAK)B¹K) BpK)BTJ³BTJP BTA© BTA>B¤A4B½A4 CSA4CbA`CbA¯ CbB" D3AbE4ABFBAB F|AB I?ABJhA}JhCÀ JhEk JhG®I?HFF|HF FBHF E4HFD3H&CbGe'
                         ],
        hC             : [
                           ['FBG9 F|G9 H¯G9IZG(IZEe IZD" IZBaH¯BNF|BN FBBN D"BNCbC`CbD¢ CbDª CbF)D"G9FBG9']
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 654
      };
      font["c"]        = {
        sC             : [
                           'H:AB IwABI´B;I´C. I´CoIwC«IKC« I/C«H§CyH§C4 H§BgHtBNH,BN F&BN C²BNCEBcCED" CEEe CEG%C²G9F&G9 H,G9 HtG9H§G!H§FT H§E²I/E£IKE£ IgE£I´E®I´FX I´GKIwHFH:HF F&HF CbHFB9G®B9Ek B9CÀ B9A}CbABF&AB'
                         ],
        xMin           : 59.5,
        xMax           : 551.5,
        yMin           : 0,
        yMax           : 450,
        wdth           : 609
      };
      font["d"]        = {
        sC             : [
                           'B9Ek B9CÀ B9A}CbABF$AB F^AB GmABHnAbI?B" I?A¯ I?A`IMA4I¨A4 IÂA4JLA>JLA© JLJQ JLJ}J>K)I¬K) IoK)I?JÃI?JQ I?HF E¸HF CbHFB9G®B9Ek'
                         ],
        hC             : [
                           ['CED" CEEe CEG(C¶G9E¸G9 I?G9 I?D¤ I?C`H~BNF^BN F$BN C¶BNCEBaCED"']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 654
      };
      font["e"]        = {
        sC             : [
                           'JLEk JLG®I#HFF`HF F&HF CbHFB9G®B9Ek B9CÀ B9A}CbABF&AB HbAB IÀABJ8B;J8C. J8CoIÀC«IsC« IVC«I+CyI+C4 I+BgH½BNHTBN F&BN C²BNCEBcCED" CED¯ JLD¯'
                         ],
        hC             : [
                           ['F`G9 H^G9I5G*I?E¼ CEE¼ CMG!C¶G9F&G9']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : 0,
        yMax           : 450,
        wdth           : 635.5
      };
      font["f"]        = {
        sC             : [
                           'E´I² F>I²FlIÀFlJQ FlJ}FPJ¿E´J¿ C´J¿BjJhB_HD B9H>AÄH+AÄGª AÄGaB7GKB_GC B_A« B_A@B¨A4BÃA4 CYA4CkA^CkA« CkG9 EeG9 F2G9F>GaF>G} F>H&F$HFEeHF CkHF CqI¢DFI²E´I²'
                         ],
        xMin           : 47.5,
        xMax           : 340.5,
        yMin           : -7,
        yMax           : 621,
        wdth           : 336.5
      };
      font["g"]        = {
        sC             : [
                           'JL@+ JLG¥ JLHJIÂHTI¨HT IMHTI?H)I?G} I?Ge HnH&GmHFF^HF F$HF CbHFB9G®B9Ek B9CÀ B9A}CbABEÄAB I?AB I??¯ I??KI5?>Hz?> CÀ?> CW?>CE?UCE@" CE@aC*@xB¢@x Be@xB9@mB9?Â B9?,BT>1C²>1 H©>1 J$>1JL>¤JL@+'
                         ],
        hC             : [
                           ['EÄBN C¶BNCEBaCED" CEEe CEG(C¶G9F$G9 F^G9 H~G9I?F)I?D¬ I?BN']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -200.5,
        yMax           : 457,
        wdth           : 654
      };
      font["h"]        = {
        sC             : [
                           'FBG9 F|G9 H¯G9IZG(IZEe IZA© IZAEI¢A4J"A4 JYA4JhA^JhA© JhEk JhG®I?HFF|HF FBHF E4HFD3H&CbGe CbJP CbJ³CAK)B¹K) BpK)BTJ³BTJP BTA© BTA>B¤A4B½A4 CKA4CbASCbA© CbD¤ CbF$D"G9FBG9'
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 663
      };
      font["i"]        = {
        sC             : [
                           'B¹Iu CEIuC±I¾C±JW C±J¹CCK;B¹K; BcK;AÂJ·AÂJW AÂI¼BjIuB¹Iu',
                           'BPGÀ BPAj BPA%Bz@ºB·@º CM@ºC^A@C^Aj C^GÀ C^HbC2HrB¹Hr B|HrBPHbBPGÀ'
                         ],
        xMin           : 46.5,
        xMax           : 166,
        yMin           : -21.5,
        yMax           : 636.5,
        wdth           : 212.5
      };
      font["j"]        = {
        sC             : [
                           'CbAB CbG{ CbH)CSHTB¿HT BcHTBTH)BTG{ BTAB BT?¯A­?y@-?y ?}?y?S?j?S?4 ?S>¬?n>m@->m B5>mCb>¾CbAB',
                           'B½Iu CIIuC´I¾C´JW C´J¹CGK;B½K; BgK;B"J·B"JW B"I¼BnIuB½Iu'
                         ],
        xMin           : -119.5,
        xMax           : 167.5,
        yMin           : -171,
        yMax           : 636.5,
        wdth           : 216.5
      };
      font["k"]        = {
        sC             : [
                           'HpAw HpA«HhB"HTB1 DnEC GCGU GaGkGcG¦GcG° GcH4G?HPFÁHP F¨HPFnH@F`H4 CbEi CbJU CbJ½C6K)B½K) B¢K)BTJ½BTJU BTA£ BTACB|A4B»A4 C:A4CbACCbA© CbDa C©D¨ GqAQ G¡AEG¶A6H,A6 HTA6HpAYHpAw'
                         ],
        xMin           : 73,
        xMax           : 470.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 484
      };
      font["l"]        = {
        sC             : [
                           'DXAB E#ABE0AlE0A© E0B@D¬BNDXBN C´BNC£BcC£C( C£JQ C£J¡CsK)C:K) BÁK)BtJÁBtJQ BtCE BtA¸BÁABDJAB'
                         ],
        xMin           : 88.5,
        xMax           : 247,
        yMin           : 0,
        yMax           : 627.5,
        wdth           : 287
      };
      font["m"]        = {
        sC             : [
                           'EQG9 F±G9GMG(GMEe GMA© GMAIGkA4GºA4 HPA4H^AYH^A© H^D¤ H^FNI=G9JYG9 K¶G9LMG*LMEe LMA© LMA>L{A4L·A4 M-A4MZA>MZA© MZEk MZG®LDHFJYHF I_HFHxG¶H0G; GoH0FhHFEQHF DaHFCÂH+C`Gk C`G{ C`H8C?HTB·HT BzHTBRHHBRG£ BRA© BRA>B¢A4B»A4 CIA4C`ASC`A© C`D¤ C`FPD7G9EQG9'
                         ],
        xMin           : 72,
        xMax           : 780,
        yMin           : -7,
        yMax           : 457,
        wdth           : 848.5
      };
      font["n"]        = {
        sC             : [
                           'F@G9 FzG9 H­G9IXG(IXEe IXA© IXAEI~A4IÄA4 JWA4JfA^JfA© JfEk JfG®I=HFFzHF F@HF E2HFD1H&C`Ge C`G{ C`H8C?HTB·HT BzHTBRHHBRG£ BRA© BRA>B¢A4B»A4 CIA4C`ASC`A© C`D¤ C`F$CÄG9F@G9'
                         ],
        xMin           : 72,
        xMax           : 593.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 662
      };
      font["o"]        = {
        sC             : [
                           'F`AB I#ABJLA}JLCÀ JLEk JLG®I#HFF`HF F&HF CbHFB9G®B9Ek B9CÀ B9A}CbABF&AB'
                         ],
        hC             : [
                           ['F&BN C²BNCEBcCED" CEEe CEG%C²G9F&G9 F`G9 HrG9I?G(I?Ee I?D" I?BaHrBNF`BN']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : 0,
        yMax           : 450,
        wdth           : 640.5
      };
      font["p"]        = {
        sC             : [
                           'JhCÀ JhEk JhG®I?HFF|HF FBHF E4HFD3H&CbGe CbG} CbH)CSHTB½HT B¤HTBTHJBTG¥ BT?6 BT>®Bc>_B¹>_ C2>_Cb>iCb?6 CbAB F¤AB I?ABJhA}JhCÀ'
                         ],
        hC             : [
                           ['IZEe IZD" IZBaH¯BNF¤BN CbBN CbDª CbF)D"G9FBG9 F|G9 H¯G9IZG(IZEe']
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -178,
        yMax           : 457,
        wdth           : 654
      };
      font["q"]        = {
        sC             : [
                           'B9CÀ B9A}CbABEÄAB I?AB I??6 I?>mIo>_I¬>_ J>>_JL>®JL?6 JLG¥ JLHJIÂHTI¨HT IkHTI?HHI?G} I?Ge HnH)GmHFF`HF F&HF CbHFB9G®B9Ek'
                         ],
        hC             : [
                           ['CEEe CEG%C²G9F&G9 F`G9 H~G9I?F&I?Dª I?BN EÄBN C¶BNCEBaCED"']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -178,
        yMax           : 457,
        wdth           : 654
      };
      font["r"]        = {
        sC             : [
                           'E©G9 F`G9 F«G9G7GGG7G£ G7H+FÁHFF`HF E©HF D»HFD/H&C`Ge C`G{ C`H8C?HTB·HT BzHTBRHHBRG£ BRA© BRA>B¢A4B»A4 CIA4C`ASC`A© C`D¤ C`FJDBG9E©G9'
                         ],
        xMin           : 72,
        xMax           : 378.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 396
      };
      font["s"]        = {
        sC             : [
                           'C±AB GKAB IMABI¶B)I¶CC I¶DHIXEUG¨EU D"EU CoEUCCE}CCFN CCFÁCgG9D"G9 H+G9 HrG9H¥G!H¥FT H¥E²I-E£IIE£ IeE£I²E®I²FX I²GKIuHFH8HF D¤HF BzHFB7GcB7FN B7E=B¤DHDFDH H&DH H`DHH©C²H©CC H©BnH`BNH&BN C¾BN CUBNCCBgCCC4 CCCqC(C«B~C« BRC«B7CoB7C. B7B;BRABC±AB'
                         ],
        xMin           : 58.5,
        xMax           : 552.5,
        yMin           : 0,
        yMax           : 450,
        wdth           : 610
      };
      font["t"]        = {
        sC             : [
                           'CkD" CkG9 EeG9 F2G9F>GaF>G} F>H&F"HFEeHF CkHF CkI~ CkJ>CKJWBÃJW BzJWB_J>B_I~ B_HD B9H>AÄH+AÄGª AÄGaB7GIB_GC B_CÀ B_A¡C©ABE´AB F`ABFjAqFjA¯ FjB@F<BNE´BN D<BNCkBaCkD"'
                         ],
        xMin           : 47.5,
        xMax           : 339.5,
        yMin           : 0,
        yMax           : 586.5,
        wdth           : 364
      };
      font["u"]        = {
        sC             : [
                           'FpBN F6BN D$BNCWBaCWD" CWG¥ CWHBC2HTB²HT BXHTBJH+BJG¥ BJCÀ BJA}CsABF6AB FpAB G¡ABH¢AbIQB" IQA± IQAMIqA4I¾A4 J6A4J^A@J^A« J^G¥ J^HJJ0HTIºHT IgHTIQH4IQG¥ IQDª IICmH¹BNFpBN'
                         ],
        xMin           : 68,
        xMax           : 589.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 662
      };
      font["v"]        = {
        sC             : [
                           'DdAB EÀAB HµG° H½GÂH½H)H½H0 H½HdHxHrHWHr H:HrGÂHdG°H< EEBV B¬H: B¢HNBlHrB>Hr B"HrA}HdA}H. A}H)A}GÄA§G°'
                         ],
        xMin           : 29,
        xMax           : 492,
        yMin           : 0,
        yMax           : 471.5,
        wdth           : 520.5
      };
      font["w"]        = {
        sC             : [
                           'MZG¡ McG¸McG¼McGÄ McHRMAH^LÂH^ L¥H^LhHRLUH& JNBF H@GÀ H2HBGÂHRGuHR GGHRG1H@G#GÀ D®BF B°H& B|HRBaH^BBH^ AÄH^A£HRA£GÄ A£G¼A£G¸A«G¡ D)AB E`AB GsFv IoAB K&AB'
                         ],
        xMin           : 31,
        xMax           : 784,
        yMin           : 0,
        yMax           : 461.5,
        wdth           : 814
      };
      font["x"]        = {
        sC             : [
                           'I/Aj I/A¯H¿AÂH»B" FJD¦ H»Ge I-G£I/G´I/GÀ I/HBH­H[HlH[ HRH[H>HVH,HD EeE[ B½HD B°HRBtH[BZH[ B;H[A¸HBA¸GÀ A¸G´AºG£B-Ge D|D¦ B-B" B$A¾A¸A©A¸Aj A¸ACB=A,BZA, BtA,B®A4B½AC EeD- H,AC H:A6HRA,HlA, H«A,I/ACI/Aj'
                         ],
        xMin           : 41.5,
        xMax           : 502.5,
        yMin           : -11,
        yMax           : 460.5,
        wdth           : 544.5
      };
      font["y"]        = {
        sC             : [
                           'J^@+ J^G¥ J^HJJ0HTIºHT IgHTIQH4IQG¥ IQDª IQCmH¹BNFpBN F6BN D$BNCWBaCWD" CWG¥ CWHBC2HTB²HT BXHTBJH+BJG¥ BJCÀ BJA}CsABF6AB FpAB G¡ABH¢AbIQB" IQ?¯ IQ?KIG?>H­?> D/?> Ci?>CW?UCW@" CW@aC;@xB´@x Bv@xBJ@mBJ?Â BJ?,Bg>1CÄ>1 H»>1 J6>1J^>¤J^@+'
                         ],
        xMin           : 68,
        xMax           : 589.5,
        yMin           : -200.5,
        yMax           : 457,
        wdth           : 663
      };
      font["z"]        = {
        sC             : [
                           'C¡BN I;G/ I;HF C±HF BcHFB7GsB7F6 B7EkBaE^B|E^ C4E^CCE£CCF6 CCF½COG9C¾G9 G{G9 B7BR B7AB G°AB I9ABIeA¼IeCQ IeCÂI7D+HÁD+ HtD+HWC´HWCQ HWB|HRBNG¡BN'
                         ],
        xMin           : 58.5,
        xMax           : 529,
        yMin           : 0,
        yMax           : 450,
        wdth           : 580
      };
      font["A"]        = {
        sC             : [
                           'FfJ¿ EEJ¿ AwA­ AsA¡AqAqAqAf AqA0B$A!B7A! BTA!BpA6B¢AY C©D3 H$D3 I+AY I5A@IQA!IuA! IªA!J:A0J:Af J:AqJ8A¡J4A­'
                         ],
        hC             : [
                           ['D>E? E¶IQ GmE?']
                         ],
        xMin           : 23,
        xMax           : 572,
        yMin           : -16,
        yMax           : 621,
        wdth           : 595.5
      };
      font["B"]        = {
        sC             : [
                           'BgAº BgAmBtABC(AB FRAB H¹ABJ>A}J>D) J>DN J>E§I¢F]HÁF¯ ITG?ImG®ImHb ImJ`H>J¿EºJ¿ C(J¿ B°J¿BgJ³BgJF'
                         ],
        hC             : [
                           ['FvF" HbF"I1E²I1DH I1D) I1BeHbBNFRBN CsBN CsF"','EºG/ CsG/ CsI¨ EºI¨ GªI¨H`ImH`H[ H`GKG®G/EºG/']
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 628.5
      };
      font["C"]        = {
        sC             : [
                           'HNAB I¬ABJ$B;J$C. J$CoI¬C«I_C« ICC«H»CyH»C4 H»BgH©BNH@BN F:BN D&BNCYBcCYD- CYH0 CYI}D+I²EºI² H@I² H©I²H»IyH»I) H»HfICHVI_HV I{HVJ$HbJ$I- J$J"I¬J¿HNJ¿ EºJ¿ CwJ¿BLJbBLH4 BLD) BLA}CuABF:AB'
                         ],
        xMin           : 69,
        xMax           : 561.5,
        yMin           : 0,
        yMax           : 621,
        wdth           : 616
      };
      font["D"]        = {
        sC             : [
                           'J>H4 J>JbH·J¿FvJ¿ C(J¿ B°J¿BgJ³BgJF BgAº BgAmBtABC(AB FRAB H¹ABJ>A}J>D)'
                         ],
        hC             : [
                           ['I1D- I1BcHdBNFRBN CsBN CsI² FvI² HbI²I1I}I1H0']
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 643.5
      };
      font["E"]        = {
        sC             : [
                           'CsF6 GyF6 H.F6HYFDHYFz HYG#H>GCGyGC CsGC CsI² IiI² I¼I²J>IÀJ>JQ J>J}J$J¿IiJ¿ C(J¿ B°J¿BgJ³BgJF BgAº BgAYB¤ABC(AB IiAB I¼ABJ>AOJ>A§ J>B/J$BNIiBN CsBN'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 621
      };
      font["F"]        = {
        sC             : [
                           'CsA© CsF6 GyF6 H.F6HYFDHYFz HYG#H>GCGyGC CsGC CsI² IiI² I¼I²J>IÀJ>JQ J>J}J$J¿IiJ¿ C(J¿ B°J¿BgJ³BgJF BgA« BgA^BvA4C,A4 C^A4CsASCsA©'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 621,
        wdth           : 600.5
      };
      font["G"]        = {
        sC             : [
                           'H»D± H»C, H»BcH©BNH@BN EºBN D)BNCYBcCYD) CYH4 CYI{D)I²F:I² H@I² H©I²H»I{H»I+ H»HpI5HVI_HV I¬HVJ$HpJ$I/ J$J"I¬J¿HNJ¿ F:J¿ CyJ¿BLJhBLH: BLD" BLA{CuABEºAB HNAB I¬ABJ$B5J$C! J$E¾ FÃE¾ FfE¾F>E®F>ES F>E*F^D±FÃD±'
                         ],
        xMin           : 69,
        xMax           : 561.5,
        yMin           : 0,
        yMax           : 621,
        wdth           : 629.5
      };
      font["H"]        = {
        sC             : [
                           'CsA© CsE¼ I1E¼ I1A© I1AEIVA4I{A4 J0A4J>A^J>A© J>JU J>J·IÂK)IwK) I?K)I1J¡I1JU I1G% CsG% CsJU CsJ¥C`K)C(K) B°K)BgJÁBgJU BgA© BgA>BµA4C,A4 C^A4CsASCsA©'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 656
      };
      font["I"]        = {
        sC             : [
                           'CsA¥ CsJY CsJ¿CGK)C,K) B´K)BgJ¿BgJY BgA¥ BgABB²A4C*A4 CdA4CsA^CsA¥'
                         ],
        xMin           : 82,
        xMax           : 152,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 234
      };
      font["J"]        = {
        sC             : [
                           'EUB> C`B>B´BTB´D$ B´DVBvDzBLDz AÀDzA¥DZA¥D$ A¥AlC,A2EUA2 G¡A2I%AlI%C¶ I%JY I%J¿H|K)H`K) H@K)G¼J»G¼J[ G¼C¼ G¼BTGIB>EUB>'
                         ],
        xMin           : 32,
        xMax           : 498,
        yMin           : -8,
        yMax           : 627.5,
        wdth           : 577
      };
      font["K"]        = {
        sC             : [
                           'I}Aw I}A¯IqAÀIcB- E,Fv HbJ0 HxJJHzJdHzJj HzJ³HTK)H4K) G¼K)G¨J»GuJ§ CsFf CsJU CsJ½CGK)C,K) B´K)BgJ¿BgJY BgA¥ BgABB²A4C*A4 CKA4CsACCsA© CsEE DFF+ HvAY H©ACH½A4I5A4 IQA4I}AOI}Aw'
                         ],
        xMin           : 82,
        xMax           : 541,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 546.5
      };
      font["L"]        = {
        sC             : [
                           'C(AB H~AB ICABIQAlIQA© IQB-I9BNH~BN CsBN CsJ[ CsJ»CKK)C,K) B°K)BgJ»BgJ[ BgA¸ BgAMB°ABC(AB'
                         ],
        xMin           : 82,
        xMax           : 519.5,
        yMin           : 0,
        yMax           : 627.5,
        wdth           : 541
      };
      font["M"]        = {
        sC             : [
                           'FfEc F©EcF»EwF¿E{ IZI? IZA¯ IZAMIwA4IÂA4 JHA4JhAKJhA© JhJU JhJµJLK)J"K) I¨K)IoJ»IZJ} FfFv CsJ} C^J¿CEK)C(K) B°K)BgJÁBgJU BgA© BgA>BµA4C,A4 CfA4CsA`CsA¯ CsI? F1E{ F6EuFFEcFfEc'
                         ],
        xMin           : 82,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 676.5
      };
      font["N"]        = {
        sC             : [
                           'I{A4 J0A4J>A^J>A© J>JU J>J·IÂK)IwK) IZK)I1J¿I1JP I1C( CsJ} C^J¿CEK)C(K) B°K)BgJÁBgJU BgA© BgA>BµA4C,A4 CfA4CsAWCsA£ CsI3 ICAB IIA:IaA4I{A4'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 656
      };
      font["O"]        = {
        sC             : [
                           'F+A0 HLA0IºB]IºD¦ IºGZ IºI¤HLK-F+K- C«K-B>I¤B>GZ B>D¦ B>B]C«A0F+A0'
                         ],
        hC             : [
                           ['F+IÄ GºIÄH­I#H­GU H­D¬ H­C6G¶B=F+B= DBB=CKC6CKD¬ CKGU CKI#D>IÄF+IÄ']
                         ],
        xMin           : 62,
        xMax           : 554.5,
        yMin           : -9,
        yMax           : 629.5,
        wdth           : 617
      };
      font["P"]        = {
        sC             : [
                           'CsA¥ CsF6 F|F6 HfF6ImG%ImHp ImJjH>K$EÀK$ C(K$ B°K$BgJ½BgJP BgA¥ BgABB²A4C*A4 CdA4CsA^CsA¥'
                         ],
        hC             : [
                           ['EÀGC CsGC CsI¼ EÀI¼ G°I¼H`I¢H`Hp H`GeGÄGCEÀGC']
                         ],
        xMin           : 82,
        xMax           : 533,
        yMin           : -7,
        yMax           : 625.5,
        wdth           : 566
      };
      font["Q"]        = {
        sC             : [
                           'F+A0 FÁA0G¬AIHWAy H³A@ I!A0I;A*IOA* IwA*I´AOI´Am I´A©I¦A¾IwB) I?B] IyC%IºC¯IºD¦ IºGZ IºI¤HLK-F+K- C«K-B>I¤B>GZ B>D¦ B>B]C«A0F+A0'
                         ],
        hC             : [
                           ['F+IÄ GºIÄH­I#H­GU H­D¬ H­D7HxCsHWC? G¡C´ GaD-GGD3G7D3 F«D3FlC±FlCm FlCWF¢C=F±C4 GoBe G;BJFzB=F+B= DBB=CKC6CKD¬ CKGU CKI#D>IÄF+IÄ']
                         ],
        xMin           : 62,
        xMax           : 554.5,
        yMin           : -12,
        yMax           : 629.5,
        wdth           : 617
      };
      font["R"]        = {
        sC             : [
                           'G¼FR H¿FxImGZImHv ImJtH>K/EºK/ C(K/ B°K/BgK"BgJY BgA¥ BgABB²A4C*A4 CdA4CsA^CsA¥ CsF6 F^F6 GºE2HnB"HpA¥ HrAbH¥A4I3A4 I_A4I}AYI}A¥ I}AÀI!E,G¼FR'
                         ],
        hC             : [
                           ['CsI¼ EºI¼ G¦I¼H`I¦H`Hp H`G]G®GCEºGC CsGC']
                         ],
        xMin           : 82,
        xMax           : 541,
        yMin           : -7,
        yMax           : 630.5,
        wdth           : 594.5
      };
      font["S"]        = {
        sC             : [
                           'CEHb CEI#CiIÂDµIÂ FbIÂ HxIÂIAI°IAH< IAG®I]GiIªGi J$GiJPG{JPH< JPJxI!K+FbK+ EMK+ B®K+B9I~B9Hh B9G5B¤FRDHF+ H^EG H|E?ICD¨ICC£ ICC;I!B>G¬B> F"B> C¶B>CGBTCGD$ CGDVC,DzB¦Dz BTDzB9DZB9D$ B9AjCkA2F"A2 G_A2 I¢A2JPBaJPC{ JPD±I¶F+HDFR D+G1 CuG?CEG¨CEHb'
                         ],
        xMin           : 59.5,
        xMax           : 583,
        yMin           : -8,
        yMax           : 628.5,
        wdth           : 642.5
      };
      font["T"]        = {
        sC             : [
                           'H0J¿ BHJ¿ A§J¿AuJrAuJU AuJ:A§I²BHI² DnI² DnA¥ DnACD½A4E;A4 E^A4E²ACE²A¥ E²I² H0I² HxI²H§J8H§JS H§J{HnJ¿H0J¿'
                         ],
        xMin           : 25,
        xMax           : 481,
        yMin           : -7,
        yMax           : 621,
        wdth           : 507.5
      };
      font["U"]        = {
        sC             : [
                           'I#J[ I#D¬ I#C6H,B=FDB= D]B=CfC6CfD¬ CfJ[ CfJ»C=K)BÁK) B¦K)BXJ¿BXJY BXD¦ BXB]CÄA0FDA0 HfA0J0B]J0D¦ J0JY J0J¿IªK)ImK) IMK)I#J½I#J['
                         ],
        xMin           : 75,
        xMax           : 567,
        yMin           : -9,
        yMax           : 627.5,
        wdth           : 642.5
      };
      font["V"]        = {
        sC             : [
                           'I+J§ EºB° B¢J§ BvJÁBZK;B7K; B"K;AqK-AqJz AqJnAsJ`AwJS EEAB FfAB J4JS J8J`J:JnJ:Jz J:K-I¨K;IuK; IVK;I;K&I+J§'
                         ],
        xMin           : 23,
        xMax           : 572,
        yMin           : 0,
        yMax           : 636.5,
        wdth           : 595.5
      };
      font["W"]        = {
        sC             : [
                           'K°B~ I9J{ I)K+H©K;HfK; HPK;H&K-G¸J} ECB~ B¦J© BvK3BVK=B9K= A«K=AwK$AwJ£ AwJzAwJvA¡J^ D|AB E¬AB HfIO KCAB LSAB ONJU OVJnOVJrOVJz OVJ³OPK5N·K5 NwK5NWK)NIJ¡'
                         ],
        xMin           : 26,
        xMax           : 906,
        yMin           : 0,
        yMax           : 637.5,
        wdth           : 932.5
      };
      font["X"]        = {
        sC             : [
                           'IMK) I/K)H¿J·H¯J¡ E²F­ B·J¡ BªJµBtK)BRK) BBK)A±JÁA±Jd A±J[A³JHAÄJ2 E2F- AÄB) AµA¸A±A§A±Au A±AKB5A4BRA4 BnA4B¨AEB·A[ E²EQ H¯A[ H½AII-A4IMA4 IkA4I¶AGI¶Au I¶A§I²A¸I¢B) FpF- I¢J2 I´JJI¶J[I¶Jd I¶J¿IcK)IMK)'
                         ],
        xMin           : 38,
        xMax           : 552.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 590.5
      };
      font["Y"]        = {
        sC             : [
                           'D¿Eº D¿A£ D¿AEECA4EgA4 F$A4F2A`F2A£ F2Eº ITJ4 I]JBIiJQIiJh IiJ³I?K)I#K) HµK)H~JÃHbJ¡ EgF­ BjJ¡ BZJ·BFK)B)K) A­K)AfJ±AfJh AfJQAqJBAyJ4'
                         ],
        xMin           : 17.5,
        xMax           : 531,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 549.5
      };
      font["Z"]        = {
        sC             : [
                           'B"AB I!AB IoABI{AlI{A© I{B@ISBNI!BN C[BN I{I¼ I{J¿ B|J¿ B;J¿AÄJ£AÄJU AÄIÀBHI²B|I² HFI² B"B>'
                         ],
        xMin           : 47.5,
        xMax           : 540,
        yMin           : 0,
        yMax           : 621,
        wdth           : 587.5
      };
      font["0"]        = {
        sC             : [
                           'J.Cw J.Hh J.J$H±K$G3K$ EQK$ CwK$BVJ$BVHh BVCw BVB9CwA8EQA8 G3A8 H±A8J.B9J.Cw'
                         ],
        hC             : [
                           ['CdH£ CdIAD5IºE;Iº GIIº HPIºI!IAI!H£ I!C[ I!B½HPBDGIBD E;BD D5BDCdB½CdC[']
                         ],
        xMin           : 74,
        xMax           : 566,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 640.5
      };
      font["1"]        = {
        sC             : [
                           'C#I¼ C#A¥ C#A^C4A4CkA4 CÄA4D1A^D1A¥ D1K1 D1KkC£K|CiK| CMK|C:KqC%K_ B/Jj A±JJA¯J4A¯J% A¯I¶A¼ImBNIm BcImB|IuB·I®'
                         ],
        xMin           : 37,
        xMax           : 183.5,
        yMin           : -7,
        yMax           : 668.5,
        wdth           : 269.5
      };
      font["2"]        = {
        sC             : [
                           'I¸H< I¸JlHnK$FLK$ C¶K$ B¦K$B>JfB>I7 B>HnBiH`B¦H` C=H`CKH©CKI7 CKI¨C^I¼CÄI¼ FLI¼ H6I¼H«I¨H«H8 H«F)B>EºB>B& B>A8 I=A8 I¬A8I¸AbI¸A} I¸B7IoBDI=BD CKBD CqE?I¸E^I¸H<'
                         ],
        xMin           : 62,
        xMax           : 553.5,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 614
      };
      font["3"]        = {
        sC             : [
                           'F¤I¼ HYI¼H«IIH«HP H«GUG5F¨EÀF¨ EaF¨E5FxE5F> E5E©E`EwEÀEw G*EwH«D±H«C´ H«B¹HYBDF¤BD EMBD DFBDCGBvCGC* CGCgC,C¡B¤C¡ BVC¡B;CfB;C# B;B+CGA8E?A8 FhA8 HÃA8I¶AÄI¶D3 I¶DµH³E°H6F> H±FjI¶GMI¶H+ I¶J<HÃK$FhK$ E?K$ CGK$B;J2B;I7 B;HlBgH`B¤H` C,H`CGHxCGI3 CGIiDJI¼EMI¼'
                         ],
        xMin           : 60.5,
        xMax           : 552.5,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 621
      };
      font["4"]        = {
        sC             : [
                           'HµC{ I7C{IeC«IeD@ IeDzI7DªHµDª H8Dª H8K$ F·K$ A§D¯ A§C{ G#C{ G#A£ G#AMGGA4GsA4 G°A4H8A@H8A£ H8C{'
                         ],
        hC             : [
                           ['G#Dª C#Dª G#Iu']
                         ],
        xMin           : 33,
        xMax           : 529,
        yMin           : -7,
        yMax           : 625.5,
        wdth           : 563
      };
      font["5"]        = {
        sC             : [
                           'B¢CU BeCUB=C8B=B² B=AÂDjA0E¸A0 H6A0I¤B_I¤D¬ I¤F»GÀH.F:H. C`H. CkI? CsIªC±I¼D@I¼ H^I¼ HÃI¼I/JBI/J^ I/J¡HÃK$H^K$ DPK$ C0K$BiJfBZI! BHG! FLG! G;G!HvFbHvD¬ HvC;G¦B=E¸B= D-B=C0CUB¢CU'
                         ],
        xMin           : 61.5,
        xMax           : 543.5,
        yMin           : -9,
        yMax           : 625.5,
        wdth           : 593.5
      };
      font["6"]        = {
        sC             : [
                           'B"Dc B"BeCkA0E²A0 H2A0I}BeI}Dd I}FfH2G¼E²G¼ E#G¼D>G£CqGQ D<H§EEIsF8J$ FHJ,FtJBFtJl FtJµFTK+EÂK+ ECK+B"I+B"Dc'
                         ],
        hC             : [
                           ['C0Dd C0E¸D)F¯E²F¯ GwF¯HpE¸HpDd HpC2GuB=E²B= D+B=C0C2C0Dd']
                         ],
        xMin           : 48.5,
        xMax           : 541,
        yMin           : -9,
        yMax           : 628.5,
        wdth           : 580
      };
      font["7"]        = {
        sC             : [
                           'DÃA. EMA.EcAUEmAm I)JB I/JWI1JhI1Jp I1J³HÃK/HlK/ CSK/ BBK/A}JpA}IA A}HvB&HjBBHj B|HjB¬H·B¬IA B¬I®B½J"CdJ" G¬J" DZAÀ DTAµDLA¥DLAo DLA<D¦A.DÃA.'
                         ],
        xMin           : 29,
        xMax           : 503.5,
        yMin           : -10,
        yMax           : 630.5,
        wdth           : 527
      };
      font["8"]        = {
        sC             : [
                           'J(CÀ J(D»I°E}I=F> IªFrJ(GQJ(HT J(J±HlK$F`K$ E¾K$ C±K$BPJ±BPHT BPGQBtFtC=F> BpE£BPD¿BPCÀ BPAoC}A8E¾A8 F`A8 H£A8J(AqJ(CÀ'
                         ],
        hC             : [
                           ['C^CÄ C^EiD/E}E¾E} F`E} HLE}H¿EiH¿CÄ H¿BVHLBDF`BD E¾BD D+BDC^BXC^CÄ','H¿HP H¿F­HTF«F`F« E¾F« D)F«C^F¯C^HP C^I¼D+I¼EºI¼ F`I¼ HVI¼H¿IºH¿HP']
                         ],
        xMin           : 71,
        xMax           : 563,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 634.5
      };
      font["9"]        = {
        sC             : [
                           'A·HP A·E¶DfE}F"E} F±E}GqE«H:F) GUC=D¿B1CwB1 C6B1C%A©C%Al C%AGC:A!CwA! FxA!ImC¾ImHP ImJbG¼K$F"K$ D¦K$A·J¯A·HP'
                         ],
        hC             : [
                           ['F"I¼ GºI¼H`IIH`HP H`GYGÂF«F"F« DlF«BÃF½BÃHP BÃI¨D¦I¼F"I¼']
                         ],
        xMin           : 41,
        xMax           : 533,
        yMin           : -16,
        yMax           : 625.5,
        wdth           : 581
      };
      font["!"]        = {
        sC             : [
                           'C©DB C©Jv C©K9C[KIC?KI C#KIBzK9BzJv BzDB BzC}C!CoC=Co CfCoC©C©C©DB',
                           'C?B_ B´B_BHB7BHA{ BHA<Bµ@ºC?@º Cu@ºD8A>D8A{ D8B;CmB_C?B_'
                         ],
        xMin           : 67,
        xMax           : 187,
        yMin           : -21.5,
        yMax           : 643.5,
        wdth           : 253.5
      };
      font["|"]        = {
        sC             : [
                           'CmA¥ CmJY CmJ¿CAK)C%K) B®K)BaJ¿BaJY BaA¥ BaABB¬A4C#A4 C^A4CmA^CmA¥'
                         ],
        xMin           : 79,
        xMax           : 149,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 229
      };
      font['"']        = {
        sC             : [
                           'BLJt BLHP BLG¬BvG}B´G} C,G}CWG®CWHP CWJt CWK9C.KGBµKG BxKGBLK7BLJt',
                           'C´Jt C´HP C´G¬D:G}DVG} D~G}DÁG¶DÁHP DÁJt DÁK7DtKGDXKG D<KGC´K7C´Jt'
                         ],
        xMin           : 69,
        xMax           : 238,
        yMin           : 413,
        yMax           : 642.5,
        wdth           : 306.5
      };
      font["'"]        = {
        sC             : [
                           'BLJt BLHP BLG¬BvG}B´G} C,G}CWG®CWHP CWJt CWK9C.KGBµKG BxKGBLK7BLJt'
                         ],
        xMin           : 69,
        xMax           : 138.5,
        yMin           : 413,
        yMax           : 642.5,
        wdth           : 207
      };
      font["#"]        = {
        sC             : [
                           'EºH) F¢J8 F¨JHF¨JWF¨J` F¨J©FjK"F>K" E¾K"E¥J©EyJj D¨H) C#H) BcH)BRG£BRGe BRG,B|F¿C#F¿ DRF¿ C¥EA BjEA B$EAA¸D¹A¸D| A¸DaB$D5BjD5 COD5 BjB$ BgA¸BeA©BeA¡ BeAUB¤A:C(A: CSA:CfA[CqAu DdD5 F-D5 EEB& EAAºE?A±E?A£ E?AUE^A:E©A: F1A:FBA[FNAu GAD5 H½D5 IaD5IoD_IoDz IoDÃIVEAH½EA GuEA HDF¿ IVF¿ I¾F¿J*GGJ*Gc J*G¡I¾H)IVH) HxH) I]J6 IaJFIcJPIcJ^ IcJ£IGK"H¿K" HrK"H^J£HTJj GaH)'
                         ],
        hC             : [
                           ['EgF¿ G.F¿ F^EA D¹EA']
                         ],
        xMin           : 41.5,
        xMax           : 564,
        yMin           : -4,
        yMax           : 624.5,
        wdth           : 607
      };
      font["$"]        = {
        sC             : [
                           'C²Bg EmBg EmA£ EmABE´A4F-A4 FlA4FzA[FzA§ FzBg G¨Bg IIBgI¸CMI¸Dp I¸EyIaF©G¬F© FzF© FzHv H0Hv HvHvH«HhH«G¾ H«GYI/GIIOGI IyGII¸GcI¸GÂ I¸H³I{I¤H>I¤ FzI¤ FzJ[ FzJÁFNK)F/K) E£K)EmJ§EmJY EmI¤ DJI¤ BpI¤B9H±B9G¨ B9F¤BrE{DJE{ EmE{ EmCs CÀCs C`CsCEC¡CEDR CED|C6E!B¢E! BgE!B9D»B9DN B9C[BTBgC²Bg'
                         ],
        hC             : [
                           ['D$F© CqF©CEG3CEG´ CEHdCfHvD$Hv EmHv EmF©','H)E{ H`E{H«E?H«Dd H«C¼HrCsH)Cs FzCs FzE{']
                         ],
        xMin           : 59.5,
        xMax           : 553.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 613
      };
      font["%"]        = {
        sC             : [
                           'H©II HpIIHYI9HLI- BeC­ BPCwBDCfBDCK BDBÃBnBªB¬Bª B·BªC*B¬CEC! I-HH I7HRIKHnIKH§ IKI/I!IIH©II',
                           'B]HF B]GcC,FµC´Fµ D|FµEYGcEYHF EYI#D|IqC´Iq C,IqB]I#B]HF',
                           'F6D& F6CCF¹BtG£Bt HdBtI3CCI3D& I3D®HdE[G£E[ F¹E[F6D®F6D&'
                         ],
        hC             : [
                           [],
                           ['CkHF CkHVC}HdC´Hd CÂHdD8HWD8HF D8H.CÂGÂC´GÂ C¥GÂCkH.CkHF'],
                           ['GYD& GYD<GmDNG£DN GºDNH&D>H&D& H&C¶G¸C£G£C£ GmC£GYC´GYD&']
                         ],
        xMin           : 65,
        xMax           : 516.5,
        yMin           : 88.5,
        yMax           : 535,
        wdth           : 583
      };
      font["&"]        = {
        sC             : [
                           'C.F¢ B;F"AµD¹AµD$ AµA{C´@¶E=@¶ E¾@¶F¢A6GUA¡ G°A> H$A#H>@ºHW@º Hj@ºH¹A#H¹AW H¹AfH·A{H§A¯ H2Bg HhC4H©C´H©D~ H©EKH`EWHDEW G¬EWG}E,G}D~ G}D>GoC©GSCW C¼GU CdG¶CSHDCSHd CSIuDJJBE2JB F:JBF>H§F»H§ GAH§G_I#G_II G_IuFrKNE2KN C¯KNBBJBBBHd BBGªB~G3C.F¢'
                         ],
        hC             : [
                           ['F|Bj F>B7EwAÂE=AÂ DLAÂBÁBTBÁD$ BÁD¤C?EaC«E¸']
                         ],
        xMin           : 40,
        xMax           : 490,
        yMin           : -23.5,
        yMax           : 646,
        wdth           : 521
      };
      font["("]        = {
        sC             : [
                           'DvA` CfA`C^AdC^CE C^H» C^J}CfJ¡DvJ¡ DvK® CIK®BPK¨BPH» BPCE BP@XCI@RDv@R'
                         ],
        xMin           : 71,
        xMax           : 217.5,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 264.5
      };
      font[")"]        = {
        sC             : [
                           'AÂA` AÂ@R CK@RDD@XDDCE DDH» DDK¨CKK®AÂK® AÂJ¡ C0J¡C8J}C8H» C8CE C8AdC0A`AÂA`'
                         ],
        xMin           : 46.5,
        xMax           : 193,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 264.5
      };
      font["*"]        = {
        sC             : [
                           'D¿F¿ D¿G¨ E¬GKE´GCF+GC F`GCFpG{FpGª FpH)FXH<FBHJ EeH¥ FBI7 FXIEFpIXFpI{ FpI¼FTJ>F+J> E´J>E´J<D¿I} D¿Jf D¿K+DtK9DXK9 D1K9C²K!C²Jf C²I} C!J6B½J>B¤J> BLJ>B>IªB>I{ B>I_BNIGBlI7 CIH¥ BjHJ BNH:B>H"B>Gª B>GiBZGCB¤GC B½GCB½GEC²G¨ C²F¿ C²FXD:FHDVFH DrFHD¿FXD¿F¿'
                         ],
        xMin           : 62,
        xMax           : 342.5,
        yMin           : 323,
        yMax           : 635.5,
        wdth           : 405
      };
      font["+"]        = {
        sC             : [
                           'D¤D< D¤Aj D¤ACD±@ºEG@º E£@ºE°ACE°Aj E°D< H6D< HhD<H¯DXH¯D¤ H¯E0HlEKH6EK E°EK E°GÀ E°HdEeHrEIHr E!HrD¤HYD¤GÀ D¤EK BTEK A¸EKA§DÃA§D¨ A§DcAºD<BTD<'
                         ],
        xMin           : 33,
        xMax           : 485,
        yMin           : -21.5,
        yMax           : 471.5,
        wdth           : 518.5
      };
      font[","]        = {
        sC             : [
                           'BÁ@C CmAf CwAyC{A©C{Aµ C{BLC(BVB¹BV B|BVBaBFBRA¼ B"@p AÄ@eAÀ@TAÀ@L AÀ?¾B;?«B]?« B¢?«Bµ@&BÁ@C'
                         ],
        xMin           : 45.5,
        xMax           : 156,
        yMin           : -93,
        yMax           : 74,
        wdth           : 220.5
      };
      font["-"]        = {
        sC             : [
                           'F¢EK BÃEK BcEKBPDÃBPD¨ BPDcBeD<BÃD< F¢D< G/D<GUDXGUD¤ GUE0G3EKF¢EK'
                         ],
        xMin           : 71,
        xMax           : 393.5,
        yMin           : 189,
        yMax           : 260.5,
        wdth           : 464.5
      };
      font["."]        = {
        sC             : [
                           'C6@º Cd@ºD-A<D-A{ D-B7CfB_C6B_ B¬B_B>B9B>A{ B>A>B¤@ºC6@º'
                         ],
        xMin           : 62,
        xMax           : 181.5,
        yMin           : -21.5,
        yMax           : 78,
        wdth           : 244
      };
      font["/"]        = {
        sC             : [
                           'BÁAM F<JB FDJUFNJ£FNJ« FNK=E¾KKE©KK E^KKEKK&EAJµ B&B) AºA£AµAhAµAW AµA!BD@¸BX@¸ B¤@¸B¹A:BÁAM'
                         ],
        xMin           : 40,
        xMax           : 326,
        yMin           : -22.5,
        yMax           : 644.5,
        wdth           : 366
      };
      font[":"]        = {
        sC             : [
                           'CGG, CuG,D>GQD>G² D>HLCwHtCGHt B½HtBPHNBPG² BPGSBµG,CGG,',
                           'CGA{ CuA{D>AÂD>B_ D>B½CwCACGCA B½CABPB¿BPB_ BPAÄBµA{CGA{'
                         ],
        xMin           : 71,
        xMax           : 190,
        yMin           : 28,
        yMax           : 472.5,
        wdth           : 261.5
      };
      font[";"]        = {
        sC             : [
                           'CGG, CuG,D>GQD>G² D>HLCwHtCGHt B½HtBPHNBPG² BPGSBµG,CGG,',
                           'C`A% D-BH D7B]D:BjD:Bv D:C0CiC:CWC: C;C:BÃC*BµB~ BeAS BcAGB_A8B_A0 B_@¢B|@mB¿@m C?@mCS@®C`A%'
                         ],
        xMin           : 71,
        xMax           : 190,
        yMin           : -43,
        yMax           : 472.5,
        wdth           : 264.5
      };
      font["<"]        = {
        sC             : [
                           'B-E« GuBn GªBaG¼B]H)B] H^B]HlB¹HlC# HlCAHWCSH:Cf CSFL H:I/ HLI7HlITHlIw HlIÀHLJ6H&J6 G¶J6G¥J.GwJ% B-F¯ A³F|A¥FfA¥FL A¥F:A¯EÀB-E«'
                         ],
        xMin           : 32,
        xMax           : 468.5,
        yMin           : 77,
        yMax           : 570,
        wdth           : 535
      };
      font["="]        = {
        sC             : [
                           'F­F- C,F- BnF-B]E¥B]Eg B]ECBpDÁC,DÁ F­DÁ G;DÁGaE9GaEc GaE´G?F-F­F-',
                           'F­Gw C,Gw BnGwB]GKB]G/ B]F¯BpFhC,Fh F­Fh G;FhGaF¦GaG, GaGZG?GwF­Gw'
                         ],
        xMin           : 77,
        xMax           : 399,
        yMin           : 238,
        yMax           : 410,
        wdth           : 476.5
      };
      font[">"]        = {
        sC             : [
                           'H§E« I%EÀI/F:I/FL I/FfI!F|H§F¯ C;J% C0J.BÁJ6B®J6 BgJ6BFIÀBFIw BFITBgI7BxI/ G_FL BxCf BZCSBFCABFC# BFB¹BTB]B¬B] B»B]C*BaC=Bn'
                         ],
        xMin           : 66,
        xMax           : 502.5,
        yMin           : 77,
        yMax           : 570,
        wdth           : 535
      };
      font["?"]        = {
        sC             : [
                           'DxD< DxC{E!CiE=Ci EYCiE§CyE§D< E§E{ G#F& HjF^I+GAI+Ht I+I¸H[KIFTKI E?KI C8KIA­J·A­HY A­GºB5G¨BRG¨ BnG¨B»GºB»HY B»J*CgJ<E?J< FvJ< G¡J<GÂI=GÂHt GÂG¶GsGMG9G= DxFf',
                           'E=@º Ek@ºF4A<F4A{ F4B7EmB_E=B_ D³B_DFB9DFA{ DFA>D¬@ºE=@º'
                         ],
        xMin           : 36,
        xMax           : 500.5,
        yMin           : -21.5,
        yMax           : 643.5,
        wdth           : 540
      };
      font["@"]        = {
        sC             : [
                           'BHGE BHD» BHB_CwA#E}A# G²A# IKA#IiAÀIiB´ IiC^I=CkHÃCk HjCkH[C?H[B¹ H[BHHJB1G¥B1 E}B1 D3B1CUC:CUD» CUGE CUI#D3J,E}J, F4J, G}J,H[I#H[GE H[E¼HLEcGÂEK H)EoH+E¼H+FJ H+G¶GwH|EÂH| DJH|C¸G¶C¸FJ C¸D¢DJCºEÂCº IOCºIiEKIiGE IiI¢H:K9F4K9 E}K9 CwK9BHI¢BHGE'
                         ],
        hC             : [
                           ['EÂE# E0E#E!E?E!FJ E!GSE0GoEÂGo F³GoFÁGQFÁFJ FÁEAF³E#EÂE#']
                         ],
        xMin           : 67,
        xMax           : 531,
        yMin           : -15,
        yMax           : 635.5,
        wdth           : 597.5
      };
      font["["]        = {
        sC             : [
                           'CmA` CmJ¡ D¨J¡ D¨K® BaK® Ba@R D¨@R D¨A`'
                         ],
        xMin           : 79,
        xMax           : 225.5,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 272
      };
      font["]"]        = {
        sC             : [
                           'C8A` AÂA` AÂ@R DD@R DDK® AÂK® AÂJ¡ C8J¡'
                         ],
        xMin           : 46.5,
        xMax           : 193,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 272
      };
      font["^"]        = {
        sC             : [
                           'B®Fn C8FnCIF«CUG! DtI¤ E°G! EºF³F-FnFZFn F¤FnF½F©F½G. F½G9F½GAF¹GM E9K9 D-K9 BNGM BJGABJG7BJG. BJF©BjFnB®Fn'
                         ],
        xMin           : 68,
        xMax           : 364,
        yMin           : 341.5,
        yMax           : 635.5,
        wdth           : 432.5
      };
      font["_"]        = {
        sC             : [
                           'H+A` AyA` A2A`A#A6A#@½ A#@tA<@RAy@R H+@R Hr@RH¢@|H¢@º H¢A>HhA`H+A`'
                         ],
        xMin           : -15,
        xMax           : 478.5,
        yMin           : -56,
        yMax           : 14.5,
        wdth           : 463.5
      };
      font[" "]        = {
        sC             : [
                         ],
        xMin           : 10000,
        xMax           : -10000,
        yMin           : 10000,
        yMax           : -10000,
        wdth           : 253.5
      };

      return font;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  MICROSOFT YAHEI  MICROSOFT YAHEI  MICROSOFT YAHEI
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:false,reverseShapes:true},nbsp=' ';

      font["我"]        = {
        sC             : [
                           'L6L¬ L¿Mr NGLoO|KM N§JT MeKxL6L¬',
                           'F¯A? I#BCJ¨Cr J4EuI¿He EÂHe EÂEÄ GaFCI/Fk I3EµI5EP GiE)EÂD¥ EÂA7 EÂ?XDJ?V CG?TBD?] B;@4B"@¥ C2@oD"@o D¢@nD¢AL D¢Dc C=D<A£C¹ AYE> C"E`D¢E¨ D¢He A[He A[Iv D¢Iv D¢K¿ CfKªB3Kt B$L=A«L² EiM<HBM§ HrLi G^LMEÂL1 EÂIv I¶Iv I¨KeIwN7 J½N7 JÄK¡K.Iv PyIv PyHe K7He KMF6KªD^ M`E¿N}G© O¬G) N=D·L<C= LtB3M?AZ N!@fNn@f N¹@fO&A$ OBA®OaCp P2CJPwC7 PSA]P0@d O¦?GNq?E MH?GL2@± KqAfK=BZ IhA<Gq@D G=@³F¯A?'
                         ],
        xMin           : 11.5,
        xMax           : 987,
        yMin           : -126.5,
        yMax           : 826.5,
        wdth           : 999.5
      };
      font["糙"]        = {
        sC             : [
                           'E®L¶ F¢Lv FRK0E¸Ij E%I­ EeKFE®L¶',
                           'AbLu BNLº B¦KrC;Iµ BDIl A·K^AbLu',
                           'F¯M@ G¥Md H@L5H|JX H6JCG{J- GKK¥F¯M@',
                           'K]@} M;@}Ps@© PS@8P:?q L±?rKK?r I)?rG²AJ G7@dFP?; Es@B FNA=GYB^ GYFk FHFk FHGp H^Gp H^B8 IZ@}K]@}',
                           'H¹G³ H¹H¶ LDH¶ LDJ¾ JjJ¾ JBJ)I¸IF I]IdH»I£ IªKbJ>Md KAMM K+LsJµKÁ LDKÁ LDN7 MLN7 MLKÁ OÃKÁ OÃJ¾ MLJ¾ MLH¶ P[H¶ P[G³ H¹G³',
                           'J*Av J*Fw OpFw OpAv NlAv NlBM K/BM K/Av J*Av',
                           'ASBi BzD¾CYG³ AlG³ AlH¶ CyH¶ CyN; DtN; DtH¶ FzH¶ FzG³ DtG³ DtF3 E=Fm F/EvF«D­ F"D4 ESDÀDtE­ Dt?5 Cy?5 CyEÃ B¿C<AºAL A¡A¿ASBi'
                         ],
        hC             : [
                           [],
                           [],
                           [],
                           [],
                           [],
                           ['NlCN NlEv K/Ev K/CN NlCN'],
                           []
                         ],
        xMin           : 8.5,
        xMax           : 984,
        yMin           : -134.5,
        yMax           : 828.5,
        wdth           : 999.5
      };
      font["米"]        = {
        sC             : [
                           'B½L_ C­M: E^KLF³I| E°H° D_J{B½L_',
                           'LFH® KPIt LÀKON:M6 OFLP MPIÁLFH®',
                           'P{Ax P8A)O´@l K´B¡I¢F¢ I¢?A Hd?A HdF¢ FvB§BB@> A¾@wA[AB E¡C{G`FÀ AwFÀ AwH1 HdH1 HdN& I¢N& I¢H1 P`H1 P`FÀ J¨FÀ L°CeP{Ax'
                         ],
        xMin           : 12.5,
        xMax           : 988,
        yMin           : -128.5,
        yMax           : 818.5,
        wdth           : 999.5
      };
      font["啊"]        = {
        sC             : [
                           'JDL; JDM> PsM> PsL; O_L; O_A9 O_?XM¼?V M1?TL.?X L%@!K¸@o L¥@`Mv@` N[@`N[AV N[L; JDL;',
                           'JWBY JWJ! MmJ! MmCt KRCt KRBY JWBY',
                           'I¢E/ J0B?HhA½ H.A²GMA» GABbG*C- GwB¶H6BÂ I#C1H¢E5 HjFQGmGµ H+I©HxLP G%LP G%?- F&?- F&MS I¤MS I¤LP I(IrHrH, IkFgI¢E/',
                           'B/Ap B/Lm EGLm EGA² DHA² DHB¡ C.B¡ C.Ap B/Ap'
                         ],
        hC             : [
                           [],
                           ['LrDs LrI" KRI" KRDs LrDs'],
                           [],
                           ['DHC¤ DHKj C.Kj C.C¤ DHC¤']
                         ],
        xMin           : 54.5,
        xMax           : 984,
        yMin           : -138.5,
        yMax           : 776.5,
        wdth           : 999.5
      };
      font["天"]        = {
        sC             : [
                           'A^@S G8B®H0G6 AwG6 AwHK HEHK HNIUHNL) BcL) BcM> OzM> OzL) I{L) IyJ^IsHK P^HK P^G6 I¯G6 KGBKPy@{ P(?¾Or?X JvAYI+F) G´A¥BV?? B-?tA^@S'
                         ],
        xMin           : 13.5,
        xMax           : 987,
        yMin           : -129.5,
        yMax           : 766,
        wdth           : 999.5
      };
      font["翼"]        = {
        sC             : [
                           'BLK³ BjLi DrLCFPK¿ F2K< CºKvBLK³',
                           'ImK£ I¨LZ K¾L=MxKÃ M_KB KaKjImK£',
                           'IMI© I=Jm K_J¢N>K# N8JuN4JE KoJ)IMI©',
                           'A¾Ip A¯JX D¨J{G#K# F¿JuF½JA DÁJ%A¾Ip',
                           'Jn@o JÃAL M´@§Pb@# P*?7 M??ÃJn@o',
                           'G3AN G¨@n E(?|B3?1 A·?kAo@% D_@bG3AN',
                           'I;L¼ I;M{ OkM{ OkIv NnIv NnL¼ I;L¼',
                           'A¯L¼ A¯M{ H`M{ H`Iv GcIv GcL¼ A¯L¼',
                           'AqAk AqBK EºBK EºCN BJCN BJD, EºD, EºE/ D@E/ D@D­ CCD­ CCI@ N³I@ N³D­ M¶D­ M¶E/ L>E/ L>D, O¤D, O¤CN L>CN L>BK PdBK PdAk AqAk'
                         ],
        xMin           : 22,
        xMax           : 976.5,
        yMin           : -136.5,
        yMax           : 796,
        wdth           : 999.5
      };
      font["花"]        = {
        sC             : [
                           'A`Db C¾FkE£I­ F³I@ F;H5E`G7 E`?G DD?G DDEt C>DUB+CL A«C·A`Db',
                           'AqKF AqLP E«LP E«NC FÃNC FÃLP K3LP K3NC LONC LOLP PiLP PiKF LOKF LOI¥ K3I¥ K3KF FÃKF FÃJ! E«J! E«KF AqKF',
                           'EÄCB G½D,IqE$ IqIW J±IW J±E§ M8GBNµI" OªH- MsF&J±DN J±Aª J±@©K²@© MÁ@© N·@©O-A~ OABdOPD# P!C¦PwCj PbBEPIAH P#?zN@?z KT?z Iq?zIqAz IqCt H>BµF|B: FTByEÄCB'
                         ],
        xMin           : 14.5,
        xMax           : 986,
        yMin           : -125.5,
        yMax           : 832.5,
        wdth           : 999.5
      };
      font["草"]        = {
        sC             : [
                           'AwK¡ AwLª EÂLª EÂNA G3NA G3Lª JÁLª JÁNA L2NA L2Lª PdLª PdK¡ L2K¡ L2Jq JÁJq JÁK¡ G3K¡ G3Ju EÂJu EÂK¡ AwK¡',
                           'AmA´ AmB¼ H^B¼ H^D^ DxD^ DxC½ CdC½ CdJ? NoJ? NoC½ MZC½ MZD^ IwD^ IwB¼ PhB¼ PhA´ IwA´ Iw?9 H^?9 H^A´ AmA´'
                         ],
        hC             : [
                           [],
                           ['DxF° DxEb MZEb MZF° DxF°','MZG± MZI: DxI: DxG± MZG±']
                         ],
        xMin           : 21,
        xMax           : 978.5,
        yMin           : -132.5,
        yMax           : 831.5,
        wdth           : 999.5
      };
      font["树"]        = {
        sC             : [
                           'J·G¿ K®HV LpF¶MCEL LDD¯ KmFoJ·G¿',
                           'KKI¿ KKK# N.K# N.N5 O?N5 O?K# PyK# PyI¿ O?I¿ O?AR O??aMP?a L­?aK¢?c Kx@%Kc@¥ Ld@uM3@u N.@uN.Ae N.I¿ KKI¿',
                           'AQDk B¦FµCdJ+ AoJ+ AoK0 CoK0 CoN? D|N? D|K0 FNK0 FNJ+ D|J+ D|Gw ECH9 F+GXF«Fu F&E¹ EWF|D|GX D|?9 Co?9 CoG] B°D§A±C@ AwC·AQDk',
                           'FNI4 GCI~ H1HCH¼F¶ IzI"I´Kh FDKh FDLu K&Lu K&Kt J~HHIwEv J£CªK~B* JvAR I³B¶I*DO G¹B(F1@M E°@«EUAV GGC;HUEl GSGVFNI4'
                         ],
        xMin           : 7.5,
        xMax           : 987,
        yMin           : -132.5,
        yMax           : 830.5,
        wdth           : 999.5
      };
      font["木"]        = {
        sC             : [
                           'B/Ip B/Jª H[Jª H[N3 IyN3 IyJª P#Jª P#Ip J,Ip LGEDPoB{ P0B>OlAn K~DPIyHs Iy?a H[?a H[Hq F)D4BZAL AÂA²A^BU E^E=H#Ip B/Ip'
                         ],
        xMin           : 13.5,
        xMax           : 982,
        yMin           : -113,
        yMax           : 824.5,
        wdth           : 999.5
      };

      return font;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim | 0);
            triangles.push(ear.i / dim | 0);
            triangles.push(next.i / dim | 0);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

    var p = c.next;
    while (p !== a) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(x0, y0, minX, minY, invSize),
        maxZ = zOrder(x1, y1, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim | 0);
            triangles.push(p.i / dim | 0);
            triangles.push(b.i / dim | 0);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    var bridge = findHoleBridge(hole, outerNode);
    if (!bridge) {
        return outerNode;
    }

    var bridgeReverse = splitPolygon(bridge, hole);

    // filter collinear points around the cuts
    filterPoints(bridgeReverse, bridgeReverse.next);
    return filterPoints(bridge, bridge.next);
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                m = p.x < p.next.x ? p : p.next;
                if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = (x - minX) * invSize | 0;
    y = (y - minY) * invSize | 0;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) >= (ax - px) * (cy - py) &&
           (ax - px) * (by - py) >= (bx - px) * (ay - py) &&
           (bx - px) * (cy - py) >= (cx - px) * (by - py);
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = 0;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ })
/******/ ]);