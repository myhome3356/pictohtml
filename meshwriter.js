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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(2),
  __webpack_require__(3),
  __webpack_require__(4),
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (HPB, HNM, CNW) {
  // >>>>>  STEP 1 <<<<<

  var scene,
    FONTS,
    defaultColor,
    defaultOpac,
    naturalLetterHeight,
    curveSampleSize,
    Γ = Math.floor,
    hpb,
    hnm,
    cnw,
    debug;
  var b128back, b128digits;
  var earcut = __webpack_require__(5);
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
  hpb = HPB(codeList);
  hnm = HNM(codeList); // Do not remove
  cnw = CNW(codeList);

  // >>>>>  STEP 2 <<<<<
  FONTS = {};
  // >>>>>  STEP 3 <<<<<
  FONTS["HirukoPro-Book"] = hpb;
  FONTS["HelveticaNeue-Medium"] = hnm; // Do not remove
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
      : "HelveticaNeue-Medium";
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK 
//
//

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var hpb={reverseHoles:false,reverseShapes:true},nbsp="\u00A0";
      // Letters seems to go from about -250 to 850
      hpb["A"]                     = {
        sC                         : ["KPB, KPA}K-A[ J­A:JVA: I«A:IkA± IZB< H»CuH§Cw DgCw DVCwDTCk C¥A± C_A:B·A: B_A:B=A` A¿A§A¿B4 A¿BNB4B¥ E¥LR EÃLÃFoLÃ FoLÃ GNLÃGqL: KHBV KPB>KPB,"],
        hC                         : [["FwI} FuI}FsIy FqIu E0Ee E.EcE.E] E.ETE8ET H2ET H<ETH<E_ H<EcH:Ee F{Iu F{I}FwI}"]],
        xMin                       : 45,
        xMax                       : 647,
        yMin                       : -4,
        yMax                       : 751,
        wdth                       : 683
      };
      hpb["B"]                     = {
        sC                         : ["B6BZ B6K} B6LBB_Lq B©LÁCDLÁ E8LÁ FmLÁGdL) HZK4HZI© HZHiGwGo HTG2HªFP I:EoI:D{ I:C>H:B@ G:ABE}AB CDAB B©ABB_An B6A»B6BZ"],
        hC                         : [["CÃFP CÃC8 CÃC*D.C* EyC* FcC*F¼Cn GPD0GPD¥ GPETF¼E» FcF]EyF] D,F] CÃFZCÃFP","CÃK% CÃH> CÃH0D,H0 E6H0 E¹H2FGHq FyI.FyIw FyJ>FFJ{ E·K6E0K6 D.K6 CÃK6CÃK%"]],
        xMin                       : 58,
        xMax                       : 508,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 545
      };
      hpb["C"]                     = {
        sC                         : ["H#A2 EiA2C©B¶ B#DuB#G. B#IkC¨KL EgM.H#M. JDM.K¥K­ L@KTL@J¿ L@JkKÁJI K}J(KLJ( JÃJ(JuJN IgKDH!KD F@K@E&J% C±H¯C±G. C±E_E0D? FRBÃH#B½ IkBÁJuC³ K%D8KLD8 K}D8KÁC¹ L@CuL@CD L@B¯K£BT JFA2H#A2"],
        xMin                       : 49,
        xMax                       : 703,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 741
      };
      hpb["D"]                     = {
        sC                         : ["EµAB C0AB B£ABB[Ad B6A§B6B4 B6KÃ B6LXBZL| B¡LÁC4LÁ EµLÁ HHLÁJ#KA K£IeK£G0 K£D{J$BÁ HJABEµAB"],
        hC                         : [["E¹K4 D,K4 CÃK4CÃK* CÃC6 CÃC*D,C* EµC* GmC*H¥D@ I»EVI»G0 I»H¯H¨IÃ GsK4E¹K4"]],
        xMin                       : 58,
        xMax                       : 671,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 708
      };
      hpb["E"]                     = {
        sC                         : ["HFB6 HFA£GÂAb GyABG@AB C*AB B6ABB6Ba B6K{ B6LÁC(LÁ GTLÁ G£LÁGÂL~ H>L]H>KÁ H>KsGÄKS G§K4GTK4 D,K4 CÃK4CÃK* CÃH2 CÃH(D,H( GTH( G¥H(H#G© HFGeHFG4 HFF¥H$Fa G§F>GTF> D,F> CÃF>CÃF4 CÃC6 CÃC*D,C* GTC* G¥C*H#B« HFBgHFB6"],
        xMin                       : 58,
        xMax                       : 450,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 488
      };
      hpb["F"]                     = {
        sC                         : ["HFG4 HFF¥H$Fa G§F>GTF> D,F> CÃF>CÃF2 CÃBV CÃA6C,A6 B6A6B6BV B6L* B6L_BWL¡ ByLÁC%LÁ GTLÁ G¡LÁGÂL¡ H@L_H@L2 H@K4G%K4 D,K4 CÃK4CÃK( CÃH4 CÃH(D,H( GTH( G¥H(H#G© HFGeHFG4"],
        xMin                       : 58,
        xMax                       : 450,
        yMin                       : -6,
        yMax                       : 750,
        wdth                       : 485
      };
      hpb["G"]                     = {
        sC                         : ["L¥FL L¥C¥ L¥C8LHB} K£B0JmAr IXA2H%A2 EiA2C«Bµ B(DsB(G0 B(IoC«KN EiM.H%M. J@M.K±K¡ LDKRLDJ¿ LDJmL!JI K£J%KVJ% K!J%J¡JF IoKDH%KD FJKDE-J( C³H¯C³G0 C³ETE-D7 FJB½H%B½ I:B½J)CK J»C}J»D2 J»ET J·EXJ³EX H@EX G³EXGqE{ GPE¿GPFL GPF¡GqFÂ G³G@H@G@ K]G@ L0G@LYG& L¥F±L¥FL"],
        xMin                       : 51,
        xMax                       : 736,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 774
      };
      hpb["H"]                     = {
        sC                         : ["ILA: H¿A:H{AZ HXA{HXB* HXF0 HXF<HLF< D*F< CÁF<CÁF0 CÁB* CÁA{C~AZ C]A:C*A: B{A:BXAZ B6A{B6B* B6L4 B6LeBXL¨ B{M%C*M% C]M%C~L© CÁLgCÁL4 CÁH2 CÁH%D*H% HLH% HXH%HXH2 HXL4 HXLeH{L¨ H¿M%ILM% I¡M%IÂL© J@LgJ@L4 J@B* J@A{IÂAZ I¡A:ILA:"],
        xMin                       : 58,
        xMax                       : 575,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 614
      };
      hpb["I"]                     = {
        sC                         : ["C*A: B{A:BXAZ B6A{B6B* B6L4 B6LcBXL§ B{M%C*M% C]M%C~L© CÁLgCÁL4 CÁB* CÁA}C~A[ C]A:C*A:"],
        xMin                       : 58,
        xMax                       : 174,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 213
      };
      hpb["J"]                     = {
        xMin                       : 58,
        xMax                       : 174,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 213
      };
      hpb["K"]                     = {
        sC                         : ["C*A: B6A:B6BT B6L4 B6L]B]L~ B¥LÁC,LÁ CcLÁC£Ly CÁLRCÁL( CÁG· CÁG¯D!G¯ G#Lo GBM!G¥M! H4M!HWL¢ H{L]H{L0 H{K±HiKu E­GJ E£G>E£G. E£F¿E­F± HiBk H{BNH{B0 H{B( HwA{HSA[ H0A<G¥A< GsA<GgA? GZABGRAE GJAHG?AS G4A_G0Ad G,AiFÂA{ FµA¯F¯Aµ D%FJ CÃFP CÁFPCÁB* CÁA}C~A[ C]A:C*A:"],
        xMin                       : 58,
        xMax                       : 476,
        yMin                       : -4,
        yMax                       : 752,
        wdth                       : 519
      };
      hpb["L"]                     = {
        sC                         : ["H2B6 H2A©G´Ae GqABG@AB C.AB B¡ABBZAa B6A¡B6B2 B6L8 B6LiBWL« ByM(C*M( C]M(C~L¬ CÁLkCÁL8 CÁC< CÁC*D0C* G@C* GsC*GµB¬ H2BiH2B6"],
        xMin                       : 50,
        xMax                       : 440,
        yMin                       : 0,
        yMax                       : 755,
        wdth                       : 474
      };
      hpb["M"]                     = {
        sC                         : ["G§DL J>KV J£M%K«M% MFM%MFJÁ MFB* MFA}M!A[ L¡A:LLA: KÁA:K¡AZ K_A{K_B% K_H£ K_IcK]Iµ KXIµK8I2 JÁHeJMF¢ I}D½I6CX HsA¹ HTA:G¡A: G!A:F©A· D_H£ D:IiD%I» D!I8D!H© D!B0 D!A¡C¤A] CaA:C.A: B¡A:BZA[ B6A}B6B* B6JÁ B6K³BjL[ B¿M%CuM% D.M%D`L¡ D³LVE!K» GuDL GwDDG}DD G¥DDG§DL"],
        xMin                       : 58,
        xMax                       : 770,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 808
      };
      hpb["N"]                     = {
        sC                         : ["CRM% D4M#DmLJ IBDk IHD_IND_ IZD_IZDo IZL6 IZLgI|L© I¿M%JNM% J£M%K!L© KDLgKDL4 KDBZ KDA¿J¼Al JoA:J%A: J%A: IBA:H¯A¹ D8Is D2I}D,I} CÁI}CÁIm CÁB* CÁAyC¡AY C_A:C,A: B{A:BXAZ B6A{B6B* B6K§ B6LHBdLx B³M%CRM%"],
        xMin                       : 58,
        xMax                       : 641,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 679
      };
      hpb["O"]                     = {
        sC                         : ["C«Bµ B(DsB(G0 B(IoC«KN EiM.H%M. JeM.LDKN N#IoN#G0 N#DsLDBµ JeA2H%A2 EiA2C«Bµ"],
        hC                         : [["E-J( C³H¯C³G0 C³ETE-D7 FJB½H%B½ I¥B½JÁD7 L:ETL:G0 L:H¯JÁJ( I¥KDH%KD FJKDE-J("]],
        xMin                       : 51,
        xMax                       : 817,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 854
      };
      hpb["P"]                     = {
        sC                         : ["C(A: ByA:BWA^ B6A£B6B0 B6K§ B6LFB^Ls B§LÁCDLÁ EBLÁ F£LÁG|KÀ HwJ¿HwI] HwG½G|F¸ F£E³EBE³ D*E³ CÁE³CÁE§ CÁB0 CÁA¡C}A] CZA:C(A:"],
        hC                         : [["CÁK% CÁG§ CÁGyD.Gy E*Gy F!GyFXH? F±H©F±I] F±J.FXJs F!K6E*K6 D.K6 CÁK6CÁK%"]],
        xMin                       : 58,
        xMax                       : 474,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 509
      };
      hpb["Q"]                     = {
        sC                         : ["LuAP L]AFLFAF L%AFK®AZ KqAoK<B% I§A2H%A2 EiA2C«Bµ B(DsB(G0 B(IoC«KN EiM.H%M. JeM.LDKN N#IoN#G0 N#D¹LmC> M(B§ MBBmMFB8 MFAµM/Av L»AXLuAP"],
        hC                         : [["E-J( C³H¯C³G0 C³ETE-D7 FJB½H%B½ I!B½I¹CT I±C]IyCr IcC©IZC² IRC»ICD) I4D:I-DF I%DRHÄDb H¿DqH¿D¡ H¿E,I@EQ IeEwI³Ew J:EwJ_ER KFDg L:EwL:G0 L:H¯JÁJ( I¥KDH%KD FJKDE-J("]],
        xMin                       : 51,
        xMax                       : 817,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 854
      };
      hpb["R"]                     = {
        sC                         : ["HÃAL H¡A8H]A8 H2A8G»AQ G¡AkGaAÃ ENE© EHEµE:Eµ D*Eµ CÁEµCÁE© CÁBX CÁA:C%A: B4A:B4BZ B4K§ B4LFB[Ls B¥LÁC@LÁ EDLÁ G!LÁH#L% I%K.I%IV I%GFGDF8 G>F6G>F0 G>F.G>F. G@F* IJBZ IVBBIVB* IVAmHÃAL"],
        hC                         : [["CÁK% CÁGy CÁGkD,Gk ETGk G@GkG@IV G@J2F­Ju FTK6ETK6 D,K6 CÁK6CÁK%"]],
        xMin                       : 57,
        xMax                       : 522,
        yMin                       : -5,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["S"]                     = {
        sC                         : ["B%CZ B%C«BDD( BcDHB­DH C.DHCKD6 CiD#C¢C­ C¹CqD/CV DHC<DpC* D¹B»EFB» E³B»FJCT F§C³F§D_ F§D_ F§EDFDE{ E§F0D³FZ C]F¿B¥G¤ B(HgB(I£ B(K:BÃL3 C»M,EPM, FDM,G*Lp G³L2H<KJ HFK0HFJ½ HFJkH#JG G¥J#GRJ# F³J#FmJe F6KBEHKB D£KBDIJ® CµJTCµI¯ CµIsC»I[ CÁIDD$I3 D,I!D>H´ DPH£DYHx DcHoD¡Ha D½HRE#HM E.HHEPH: EsH,E}H( G@GRG¸Fn HkE«HkD_ HkC.GpB0 FuA2ELA2 D#A2C$A­ B%BcB%CZ"],
        xMin                       : 50,
        xMax                       : 468,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 505
      };
      hpb["T"]                     = {
        sC                         : ["I%Ly IPLRIPL% IPK{I.KW H¯K4HaK4 FuK4 FgK4FgK! FgB% FgAyFDAY F!A:EsA: E@A:DÁAX D}AwD}B% D}K( D}K4DqK4 B©K4 BZK4B8KW A¹K{A¹L% A¹LNB9Lw B]LÁB©LÁ HaLÁ H}LÁI%Ly"],
        xMin                       : 42,
        xMax                       : 519,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 556
      };
      hpb["U"]                     = {
        sC                         : ["B0Dm B0L4 B0LeBRL¨ BuM%C%M% CXM%CzL© C½LgC½L4 C½D­ C½D%DbCc E(BÁE­BÁ FkBÁG/Cb GuD#GuD§ GuL4 GuLeG¹L¨ H8M%HkM% H¿M%I=L© I_LgI_L4 I_Dk I_C2HSB4 GHA6E­A6 DJA6C=B5 B0C4B0Dm"],
        xMin                       : 56,
        xMax                       : 526,
        yMin                       : -6,
        yMax                       : 754,
        wdth                       : 564
      };
      hpb["V"]                     = {
        sC                         : ["JµL2 JµKÃJ­K« GHA¯ G,A>F_A> E¡A>EcA¯ B!K« A½KÃA½L2 A½LcB<L§ B_M%BµM% C8M%CVL± CuLwC£LP FPDe FRDc FRDaFSD` FTD_FVD_ FZD_FZDe I,LP I6LwITL± IsM%I»M% JLM%JpL§ JµLcJµL2"],
        xMin                       : 44,
        xMax                       : 616,
        yMin                       : -2,
        yMax                       : 754,
        wdth                       : 652
      };
      hpb["W"]                     = {
        sC                         : ["KBA: JoA>JPA¹ J@BV HsH³HeH³ F¥A¹ FgA:E±A: E2A>D¿A¹ BNKo B:L:BZLj B{L»C@L» C³L»D(LB D4K³ E¥E0E±E0 EµE0FDF| FwHFG0J5 GkL#GwLR G¯M#HiM# IDM#IaL8 I³J{JMH« J­F¹K%F! KDE0 KFE0KHE6 M*L< MBL»M»L» NRL»NwLk N½L<N«K{ L6A¹ KÁA:KBA:"],
        xMin                       : 70,
        xMax                       : 867,
        yMin                       : -4,
        yMax                       : 753,
        wdth                       : 903
      };
      hpb["X"]                     = {
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["Y"]                     = {
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["Z"]                     = {
        sC                         : ["B,BT B,B{BHC( G.JÁ G2K%G2K* G2K4F¿K4 CLK4 B(K4B(L( B(LÁCNLÁ H>LÁ HyLÁI$Ls IRLFIRK¯ IRKiI<K@ DTCF DLC6 DLC*DcC* H6C* I]C*I]B8 I]A©I;Ae H½ABHkAB CsAB BÃABBgAf B,A«B,BT"],
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["a"]                     = {
        sC                         : ['H@HR HLHqHRH| HXH©HrH¸ H­I#I2I# IµI#IµG£ IµBk IµADI4AD H§ADHmAW HTAkH@A» G6A2E±A2 D8A2BÃBI A«CaA«E6 A«F¯BÃH" D8I:E±I: G4I:H@HR'],
        hC                         : [['D<F« CgF2CgE6 CgD:D<Ce DµB±E±B± F­B±G`Ce H4D:H4E6 H4F2G`F« F­G_E±G_ DµG_D<F«']],
        xMin                       : 35,
        xMax                       : 552,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 584
      };
      hpb["b"]                     = {
        sC                         : ['C{A» CaA:B¹A: BgA<BGA_ B(A£B(B4 B(KF B(K¡BFKÃ BeLBB¹LB CFLBCfKÄ C§K£C§KF C§KF C§HX D­I:F,I: G¥I:H½H" J2F¯J2E6 J2CaH½BI G¥A2F,A2 D£A2C{A»'],
        hC                         : [['G¡Ce HTD:HTE6 HTF2G¡F« G(G_F,G_ E0G_D[F« C©F2C©E6 C©D:D[Ce E0B±F,B± G(B±G¡Ce']],
        xMin                       : 51,
        xMax                       : 568,
        yMin                       : -8,
        yMax                       : 704,
        wdth                       : 597
      };
      hpb["c"]                     = {
        sC                         : ["E½B³ FÃB³G¥C¥ HTDaH©Da I2DaIND@ IkCÃIkCw IkCgIcCN I!BLH&A¢ G,A2E»A2 D@A2C)BI AµCaAµE8 AµF±C)H# D@I:E»I: F·I:G¥H~ HqH@I:Ga IRGBIRF» IRFoI4FR H¹F6HmF6 HNF6G¿FZ G*G]E½G] DÁG]DHFª CsF2CsE8 CsD<DHCg DÁB³E½B³"],
        xMin                       : 40,
        xMax                       : 532,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 559
      };
      hpb["d"]                     = {
        sC                         : ['I%A: HXA:HBA» G>A2E³A2 D:A2C"BI A¯CaA¯E6 A¯F¯C"H" D:I:E³I: G6I:H8HX H8KF H8K£HWKÄ HwLBI%LB IZLBIyKÃ I¹K¡I¹KF I¹B4 I¹A£IwA^ IVA:I%A:'],
        hC                         : [['D>F« CiF2CiE6 CiD:D>Ce D·B±E³B± F¯B±GcCe H8D:H8E6 H8F2GcF« F¯G_E³G_ D·G_D>F«']],
        xMin                       : 37,
        xMax                       : 554,
        yMin                       : -8,
        yMax                       : 704,
        wdth                       : 585
      };
      hpb["e"]                     = {
        sC                         : ["E³A2 D8A2BÄBI A­CaA­E8 A­F±BÄH# D8I:E³I: GVI:HsH, I±FÁI±E] I±E.IoD¯ INDkI!Di D:Di D!DiCwDe C³C§D_CE E,B©E³B© F#B©F8B« FLB­F[B° FkB³F¡Bº FµBÁF¾BÄ G#C#G8C/ GLC:GRC= GXC@GoCM G§CZG©C] H%CqH8Cq HcCqH~CT H»C8H»Bµ H»B2G´As F­A2E³A2"],
        hC                         : [['E³G] E0G]D^G" C­FkC{E¹ D!EµD6Eµ GiEµ GuEµGªE¶ G½E·H#E· G·FiGAG! FoG]E³G]']],
        xMin                       : 36,
        xMax                       : 561,
        yMin                       : -234,
        yMax                       : 508,
        wdth                       : 594
      };
      hpb["f"]                     = {
        sC                         : ["B¹I! CaI! CaIµ CaJÁD3Ks D©LFE§LF EµLF F©LFGVK¤ H%K<H%Jw H%JRG®J8 GqIÁGLIÁ G!IÃFuJR FFJ§EÁJ© EµJ© E>J©E>I© E>I! F£I! G­I!G­H: G­GZF£GZ E>GZ E>BZ E>A6DPA6 CaA6CaBZ CaGZ B¹GZ A£GZA£H@ A£I!B¹I!"],
        xMin                       : 31,
        xMax                       : 434,
        yMin                       : -6,
        yMax                       : 706,
        wdth                       : 450
      };
      hpb["g"]                     = {
        sC                         : ['B³>± Bo?0Bo?_ Bo?©B¯@# C*@BCV@B C£@BD(?½ D«?:E±?: F¹?:Gp?Ã HH@©HHA· GDA4EÃA4 DJA4C2BK A½CcA½E6 A½F¯C2H" DJI:EÃI: GLI:HRHT H_HsH§H± I*I*IJI* IsI*IªH¯ I¿HoIÃHO J#H0J#G£ J#A« J#@*Hª>¯ Gk=oE­=o D*=oB³>±'],
        hC                         : [['DVF« C£F2C£E6 C£D:DVCe E,B±F(B± G#B±G{Ce HPD:HPE6 HPF2G{F« G#G_F(G_ E,G_DVF«']],
        xMin                       : 36,
        xMax                       : 550,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 577
      };
      hpb["h"]                     = {
        sC                         : ["B(B. B(K% B(LBB»LB C§LBC§K( C§H¡ DkI:E_I: FÃI:G¿HD H»GNH»E³ H»BV H»AµH}Ag HaA:H,A: G<A:G<Bu G<Ee G<FLF£F¸ FDG_EaG_ D¥G_DCG& C§FqC§E© C§B4 C§A¥CgA_ CHA:B·A: B¥A:BwA@ BsA@ B]A@BJAV BDA] B(AyB(B."],
        xMin                       : 51,
        xMax                       : 491,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 524
      };
      hpb["i"]                     = {
        sC                         : ["B!B4 B!H6 B!HoBBH³ BcI2BµI2 C@I2CaH³ C£HoC£H6 C£B4 C£A}CaA[ C@A:BµA: BcA:BBA[ B!A}B!B4","BµI¹ BeI¹BCJ7 B!JXB!J© B!K2BCKR BeKsBµKs C>KsC`KQ C£K0C£J© C£JXC`J7 C>I¹BµI¹"],
        xMin                       : 48,
        xMax                       : 159,
        yMin                       : -4,
        yMax                       : 664,
        wdth                       : 191
      };
      hpb["j"]                     = {
        sC                         : ["C:I¹ B¯I¹BlJ7 BJJXBJJ© BJK2BlKR B¯KsC:Ks CeKsC©KQ D(K0D(J© D(JXCªJ7 CgI¹C:I¹","D%H8 D%?L D%>]Cd>$ BÃ=oB@=o B:=o A«=oAh=° AF>,AF>_ AF>£A[>º Aq?.A«?9 AÃ?DB5?_ BJ?yBJ?Á BJH8 BJHqBkHµ B­I4C:I4 CiI4CªHµ D%HqD%H8"],
        xMin                       : 2,
        xMax                       : 179,
        yMin                       : -234,
        yMax                       : 664,
        wdth                       : 211
      };
      hpb["k"]                     = {
        sC                         : ["C±E· EqHk EÁI2F_I2 F¯I2G*Hµ GHHsGHHJ GHH.G8Gµ EVEB EZE:E¡D¥ G:B_ GJBBGJB% GJA{G+A] F¯A>F_A> F!A>E§Am C³Dk C­DuC«Du C§DuC§Dm C§BZ C§A·CiAh CLA:B»A: BZA:BAAc B(A­B(BZ B(K! B(LBB»LB C§LBC§K! C§E¯C«E¯ C­E¯C±E·"],
        xMin                       : 51,
        xMax                       : 388,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 417
      };
      hpb["l"]                     = {
        // shapeCmds                  : [[[51,57],[51,642],[51,671,67,687.5],[83,704,107,704],[130,704,145.5,687.5],[161,671,161,642],[161,57],[161,29,145.5,12.5],[130,-4,107,-4],[83,-4,67,12.5],[51,29,51,57]]],
        sC                         : ['B(B4 B(KF B(K£BHKÄ BiLBB»LB CFLBCfKÄ C§K£C§KF C§B4 C§A}CfA[ CFA:B»A: BiA:BHA[ B(A}B(B4'],
        xMin                       : 51,
        xMax                       : 161,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 194
      };
      hpb["m"]                     = {
        sC                         : ['G<B4 G<E¥ G<FZF{F¿ F8G_EaG_ D¥G_DCG* C§FwC§E± C§Bi C§A:B»A: BVA:BAAd B,A¯B%Bk B%G« B%I6B¹I6 C6I6CQI" CmH³CwHu DTI:E_I: G*I:H*H4 I%I:JuI: L6I:M2HD N.GNN.E³ N.Bk N.A:M@A: LPA:LPBi LPE¥ LPFZK²F¿ KNG_JuG_ IÁG_I[G! H»FgH¹Eµ H¹Bk H¹A:H,A: G}A:G]A[ G<A}G<B4'],
        xMin                       : 50,
        xMax                       : 822,
        yMin                       : -4,
        yMax                       : 508,
        wdth                       : 854
      };
      hpb["n"]                     = {
        sC                         : ['G<B4 G<E¥ G<FZF{F¿ F8G_EaG_ EaG_ D§G_DDG) C§FuC§E¯ C§Bi C§A:B»A: BVA:BAAd B,A¯B%Bk B%G« B%I6B¹I6 C6I6CQI" CmH³CwHu DTI:E_I: FÃI:G¿HD H»GNH»E³ H»Bk H»A·H¤Ah HkA:H,A: G}A:G]A[ G<A}G<B4'],
        xMin                       : 50,
        xMax                       : 491,
        yMin                       : -4,
        yMax                       : 508,
        wdth                       : 523
      };
      hpb["o"]                     = {
        // shapeCmds                  : [[[40,251],[40,358,115.5,433],[191,508,299,508],[406,508,481,433],[556,358,556,251],[556,143,481,67.5],[406,-8,299,-8],[191,-8,115.5,67.5],[40,143,40,251]]],
        sC                         : ['AµE8 AµF±C)H# D@I:E»I: GoI:H§H# I½F±I½E8 I½CaH§BI GoA2E»A2 D@A2C)BI AµCaAµE8'],
        // holeCmds                   : [[[[151,251],[151,189,194,146],[237,103,299,103],[360,103,402.5,146],[445,189,445,251],[445,312,402.5,354.5],[360,397,299,397],[237,397,194,354.5],[151,312,151,251]]]],
        hC                         : [['CqE8 CqD<DFCg D¿B³E»B³ FµB³GhCg H<D<H<E8 H<F2GhFª FµG]E»G] D¿G]DFFª CqF2CqE8']],
        xMin                       : 40,
        xMax                       : 556,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 581
      };
      hpb["p"]                     = {
        // shapeCmds                  : [[[106,504],[147,504,156,457],[223,508,309,508],[416,508,492,432.5],[568,357,568,250],[568,144,492,68.5],[416,-7,309,-7],[227,-7,161,41],[161,-142],[161,-170,145,-187],[129,-204,106,-204],[81,-204,66,-186.5],[51,-169,51,-142],[51,443],[51,469,67,486.5],[83,504,106,504]]],
        sC                         : ['B¹I2 CiI2C{HT D£I:F,I: G¥I:H½H" J2F¯J2E6 J2CcH½BK G¥A4F,A4 D«A4C§A· C§?% C§>oCe>L CD>*B¹>* Be>*BF>M B(>qB(?% B(H8 B(HmBHH² BiI2B¹I2'],
        // holeCmds                   : [[[[414,145],[457,188,457,250],[457,312,414,355],[371,398,309,398],[247,398,204.5,355],[162,312,162,250],[162,188,204.5,145],[247,102,309,102],[371,102,414,145]]]],
        hC                         : [['G¡Ce HTD:HTE6 HTF2G¡F« G(G_F,G_ E0G_D[F« C©F2C©E6 C©D:D[Ce E0B±F,B± G(B±G¡Ce']],
        xMin                       : 51,
        xMax                       : 568,
        yMin                       : -204,
        yMax                       : 508,
        wdth                       : 597
      };
      hpb["q"]                     = {
        // shapeCmds                  : [[[448,457],[461,504,499,504],[499,504],[522,504,538,486.5],[554,469,554,443],[554,-142],[554,-170,539,-187],[524,-204,498,-204],[475,-204,459,-187],[443,-170,443,-142],[443,41],[379,-7,295,-7],[188,-7,112.5,68],[37,143,37,250],[37,357,112.5,432.5],[188,508,295,508],[382,508,448,457]]],
        sC                         : ['HBHT H]I2I(I2 I(I2 IVI2IwH² I¹HmI¹H8 I¹?% I¹>oIy>L IZ>*I%>* Hy>*HX>L H8>oH8?% H8A· G8A4E³A4 D:A4C"BJ A¯CaA¯E6 A¯F¯C"H" D:I:E³I: G>I:HBHT'],
        // holeCmds                   : [[[[190,355],[147,312,147,250],[147,188,190,145],[233,102,295,102],[357,102,400,145],[443,188,443,250],[443,312,400,355],[357,398,295,398],[233,398,190,355]]]],
        hC                         : [['D>F« CiF2CiE6 CiD:D>Ce D·B±E³B± F¯B±GcCe H8D:H8E6 H8F2GcF« F¯G_E³G_ D·G_D>F«']],
        xMin                       : 37,
        xMax                       : 554,
        yMin                       : -204,
        yMax                       : 508,
        wdth                       : 585
      };
      hpb["r"]                     = {
        // shapeCmds                  : [[[351,454],[351,394,290,394],[284,394,277,395],[270,396,259,396],[218,396,189.5,369.5],[161,343,161,291],[161,90],[161,-4,107,-4],[50,-4,50,74],[50,429],[50,504,104,504],[145,504,157,451],[215,506,278,506],[310,506,330.5,490],[351,474,351,454]]],
        sC                         : ['F£HN F£GVE©GV E{GVEmGX E_GZEHGZ DwGZD=G$ C§FqC§E« C§Bw C§A:B»A: B%A:B%BV B%G¿ B%I2BµI2 CeI2C}HH DqI6EoI6 F.I6FWH¹ F£HwF£HN'],
        xMin                       : 50,
        xMax                       : 351,
        yMin                       : -4,
        yMax                       : 506,
        wdth                       : 372
      };
      hpb["s"]                     = {
        sC                         : ["G4CP G4B]FYAª E¡A2DZA2 CPA2BtAp A¹B,A¹B{ A¹C!B2C= BNCXB{CX C#CXCgC+ D(B¡DcB¡ D»B¡E4B¹ EPC.EPCN EPC³DLDT CoD§ B¡E<BOE¤ AÃFFAÃG! AÃGµB~Hf CZI8DoI8 E¡I8FMHw F¿H4F¿Gy F¿GRF¤G8 FgFÁF:FÁ E·FÁEOGA D­GeDVGe D2GeCÀGO C«G:C«FÃ C«F£CÀFk D2FTDuF. D¯EÃ D¿E¹EAE§ EgEsEwEi G4D¥G4CP"],
        xMin                       : 50,
        xMax                       : 351,
        yMin                       : -4,
        yMax                       : 506,
        wdth                       : 372
      };
      hpb["t"]                     = {
        // shapeCmds                  : [[[102,496],[160,496],[160,563],[160,644,216,644],[270,644,270,563],[270,496],[327,496],[400,496,400,447],[400,396,327,396],[270,396],[270,81],[270,-4,216,-4],[216,-4],[184,-4,172,17],[160,38,160,81],[160,396],[102,396],[67,396,49,406.5],[31,417,31,443],[31,472,48.5,484],[66,496,102,496]]],
        sC                         : ['B±I! C¥I! C¥J( C¥KJDsKJ E_KJE_J( E_I! FPI! GcI!GcH@ GcGZFPGZ E_GZ E_Be E_A:DsA: DsA: D2A:C½Ae C¥A±C¥Be C¥GZ B±GZ BHGZB#Gp A£G§A£H8 A£HsB"H­ BFI!B±I!'],
        xMin                       : 31,
        xMax                       : 400,
        yMin                       : -4,
        yMax                       : 644,
        wdth                       : 425
      };
      hpb["u"]                     = {
        // shapeCmds                  : [[[158,442],[158,213],[158,168,191,135.5],[224,103,268,103],[315,103,346.5,129],[378,155,378,207],[378,417],[378,504,432,504],[465,504,475.5,483],[486,462,489,416],[489,81],[489,-5,433,-5],[397,-5,385,28],[337,-8,269,-8],[172,-8,110,51.5],[48,111,48,206],[48,416],[48,458,59.5,481],[71,504,102,504],[126,504,142,487.5],[158,471,158,442]]],
        sC                         : ['C¡H6 C¡Dm C¡CµD@CQ D¥B³EZB³ F8B³FxCD G6CyG6Da G6G§ G6I2H!I2 HeI2HzH« H±H_H·G¥ H·Be H·A8H#A8 G]A8GDA{ FeA2E]A2 C½A2BÁB) B!BÃB!D_ B!G¥ B!HVB9H§ BPI2B±I2 C>I2C_H´ C¡HqC¡H6'],
        xMin                       : 48,
        xMax                       : 489,
        yMin                       : -8,
        yMax                       : 504,
        wdth                       : 521
      };
      hpb["v"]                     = {
        // shapeCmds                  : [[[182,34],[43,431],[39,443,39,450],[39,473,55.5,489],[72,505,95,505],[119,505,132,489],[145,473,155,443],[223,226],[232,196,238,181],[252,219,265.5,262.5],[279,306,295.5,361],[312,416,320,443],[330,473,343,489],[356,505,380,505],[380,505],[403,505,420,488.5],[437,472,437,450],[437,443,433,431],[294,34],[280,-4,238,-4],[195,-4,182,34]]],
        sC                         : ['D.A© A»GÃ A³H8A³HF A³HuB1H· BRI4B£I4 C0I4CJH· CeHuCyH8 D£D© DµDJDÁD, E:DyEUEO EqF%E´F· F2G¥FBH8 FVHuFqH· F­I4G:I4 G:I4 GiI4G­H¶ H,HsH,HF H,H8H#GÃ E±A© EsA:DÁA: DHA:D.A©'],
        xMin                       : 39,
        xMax                       : 437,
        yMin                       : -4,
        yMax                       : 505,
        wdth                       : 465
      };
      hpb["w"]                     = {
        sC                         : ["C§A³ AµH* A±H.A±H@ A±HiB,H¬ BJI*B}I* CPI*CgHk CyH0 DeD»D±C» F<H_ FTI2G(I2 GLI2GkHÀ G«H«GµHg H#H, I(DoIDCÁ IFCÁIFCÃ JiHk JqH©J¯H» K(I*KNI* K§I*L!H° L@HqL@HB L@H:L<H* JHA± J.A:IXA: H{A:H]A³ HNB8G¨C¸ G<EsG%F. G#F, EsA± ERA:DuA: CÁA:C§A³"],
        xMin                       : 38,
        xMax                       : 703,
        yMin                       : -4,
        yMax                       : 504,
        wdth                       : 730
      };
      hpb["x"]                     = {
        sC                         : ["D©Cu D¡CmDsCX CyA§ CRA:B¯A: B]A:B<A[ A¿A}A¿B( A¿BBB>B{ C§E4 B>Go A¿GÃA¿H@ A¿HoB=H² B_I0B¯I0 C:I0CZH³ CyHe DsF³ D¡F}D©Fu D±F}D½F³ E¹He FDI0F¥I0 G4I0GRH¯ GqHiGqH8 GmH#GiG¿ GPGo EÁEV E½EPE¯E4 E±E0E·E$ E½D½EÁD· GeBa GuBDGuB* GuA{GRAZ G0A:F§A: FBA:E¹A§ D¯Cs D­CuD©Cu"],
        xMin                       : 45,
        xMax                       : 409,
        yMin                       : -4,
        yMax                       : 503,
        wdth                       : 435
      };
      hpb["y"]                     = {
        sC                         : ["G·GÃ D§?! De>JDJ>4 D2>!C±>! C_>!C>>B BÁ>cBÁ>µ BÁ?#C%?8 C·Aq C¯A·C©B% C©B. A£GÃ AyH8AyHF AyHuA»H· B8I4BiI4 B½I4C2H¶ CJHsC_H6 DkD¥ D§D4D­D% D³D4E*D¥ F6H6 FBH_FMHv FXH¯FrHÃ F­I4G,I4 G_I4G~H¶ G¿HsG¿HF G¿H8G·GÃ"],
        xMin                       : 27,
        xMax                       : 429,
        yMin                       : -208,
        yMax                       : 505,
        wdth                       : 457
      };
      hpb["z"]                     = {
        // shapeCmds                  : [[[342,0],[130,0],[48,0,48,58],[48,58],[48,82,60,99],[226,347],[254,389],[231,393,196,393],[102,393],[82,393,65,409],[48,425,48,447],[48,469,64,484.5],[80,500,102,500],[312,500],[350,500,373,484],[396,468,396,439],[396,426,390,415],[372,384],[358,360,283,251.5],[208,143,190,110],[206,107,247,107],[342,107],[362,107,379,91],[396,75,396,54],[396,32,380,16],[364,0,342,0]]],
        sC                         : ['FoAB CFAB B!ABB!B6 B!B6 B!BgB:B« D©Fy E>GL D³GTDJGT B±GT BgGTBDGu B!G·B!H@ B!HmBBH® BcI*B±I* F2I* F¡I*G,H­ GZHkGZH0 GZG¹GNG£ G*GB F±FµEyE9 DcCaD>BÁ D_B»E0B» FoB» F¹B»G8By GZBXGZB. GZA¥G:Ac F½ABFoAB'],
        xMin                       : 48,
        xMax                       : 396,
        yMin                       : 0,
        yMax                       : 500,
        wdth                       : 426
      };
      hpb["0"]                     = {
        // shapeCmds                  : [[[475,66.5],[401,-8,300,-8],[199,-8,124.5,65],[50,138,50,241],[50,508],[50,608,124,682.5],[198,757,300,757],[399,757,474,685],[549,613,549,508],[549,241],[549,141,475,66.5]]],
        sC                         : ['HyBG GeA2E½A2 DPA2C;BD B%CVB%E# B%I: B%J¥C:Kº DNM,E½M, GaM,HwK¿ I¯J¯I¯I: I¯E# I¯C]HyBG'],
        // holeCmds                   : [[[[300,639],[245,639,205,598.5],[165,558,165,506],[165,243],[165,190,205,149.5],[245,109,300,109],[354,109,393,149],[432,189,432,243],[432,506],[432,560,393,599.5],[354,639,300,639]]]],
        hC                         : [['E½K@ E,K@D]Jp C¯IÁC¯I6 C¯E( C¯D>D]Cn E,B¿E½B¿ F©B¿GTCm H!D<H!E( H!I6 H!J!GTJr F©K@E½K@']],
        xMin                       : 50,
        xMax                       : 549,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 600
      };
      hpb["1"]                     = {
        // shapeCmds                  : [[[390,12.5],[373,-4,348,-4],[323,-4,306.5,12.5],[290,29,290,53],[290,633],[290,643,281,643],[228,643],[205,643,189.5,658.5],[174,674,174,696],[174,719,189.5,734.5],[205,750,227,750],[361,750],[381,750,394,736],[407,722,407,701],[407,53],[407,29,390,12.5]]],
        sC                         : ['GNA[ G,A:F{A: FHA:F&A[ E©A}E©B, E©K4 E©KHEuKH D­KH D]KHD=Kh CÁK©CÁL2 CÁLaD=L¢ D]LÁD«LÁ F·LÁ G<LÁGVL¥ GqLgGqL< GqB, GqA}GNA['],
        xMin                       : 174,
        xMax                       : 407,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["2"]                     = {
        sC                         : ["HµAB C_AB B¹ABBeAn B2A»B2Ba B2C!BeCX BuCkC¡Dh D«EeE¸Fl G!GsGPH4 G¹H«G¹IT G¹J6GPJ} F­KBF(KB EXKBD¾J· D_JgDDI¿ D8I{C»Ie CyINCTIN C%INB§Iq BcIµBcJB BcJVBiJi B¹KwCµLP D±M*F(M* GkM*HuKÃ I¡J¹I¡IT I¡H³I_HD I>GyHºG> HqF§H!F4 GTEeG$E: FwD³E¼D? E<CoDÃCV D«C@ D{C4D{C0 D{C*D¥C* HµC* I2C*I]B§ I©B_I©B4 I©A©IdAe I@ABHµAB"],
        xMin                       : 56,
        xMax                       : 546,
        yMin                       : 0,
        yMax                       : 756,
        wdth                       : 600
      };
      hpb["3"]                     = {
        sC                         : ["BBD> BBDqB`D· B}E8C.E8 CTE8CvDÂ C¹D©CÃD_ D6C«DxCP E8B»EµB» FwB»G?Ce G«D0G«D¿ G«E§GFFY F§G.F#G6 EwG>EWG^ E8G}E8H% E8HREUHp EsH¯E¹H¾ F:I*FWIR FuI{FuJ: FuJwFYJ¾ F>K@E­K@ ENK@D®J¥ DHJDC¿JD CwJDCUJl C4JµC4K< C4KgCBK¡ D6M.E©M. F±M.GsLI HVKeHVJL HVI@GwHB H%H! IqFµIqDµ IqCLHeB? GXA2EµA2 DgA2CXB& BJB¿BBD>"],
        xMin                       : 64,
        xMax                       : 535,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 600
      };
      hpb["4"]                     = {
        // shapeCmds                  : [[[561,181],[561,154,542.5,141],[524,128,505.5,125.5],[487,123,487,119],[487,67],[487,36,472,16.5],[457,-3,428,-3],[400,-3,385,17.5],[370,38,370,67],[370,119],[370,125,364,125],[124,125],[39,125,39,193],[39,214,52,238],[341,690],[353,709,362,720],[371,731,386.5,741.5],[402,752,420,752],[487,752,487,667],[487,243],[487,237,493,237],[500,237],[561,230,561,181]]],
        sC                         : ['J#D, J#CwI¢C] IZCBI5C= H³C8H³C0 H³BH H³A­HsAd HTA<G½A< GcA<GDAf G%A±G%BH G%C0 G%C<F½C< C:C< A³C<A³DD A³DoB*DÁ FmL% F§LLF¹Lc G(LyGGL° GgM!G­M! H³M!H³Ky H³E( H³D¿H¿D¿ I*D¿ J#D±J#D,'],
        // holeCmds                   : [[[[184,237],[364,237],[370,237,370,244],[370,539],[369,542],[368,542,366,540],[182,243],[181,242,181,240],[181,237,184,237]]]],
        hC                         : [['D2D¿ F½D¿ G%D¿G%E* G%Iy G#I¡ G!I¡FÁI{ D.E( D,E%D,E! D,D¿D2D¿']],
        xMin                       : 39,
        xMax                       : 561,
        yMin                       : -3,
        yMax                       : 752,
        wdth                       : 600
      };
      hpb["5"]                     = {
        sC                         : ['E©A2 DsA2CvA¢ ByBLB:CN B(CwB(C­ B(D4BLDX BqD}BÁD} CeD}C­D, D,CiDpC@ E2B»E©B» F¡B»GPCl H!D>H!E6 H!F,GOF¡ F}GPE©GP E@GPDlG/ C¹F±CwF± C@F±B¶G7 BgGaBgG» BgH,BiH8 CNL# CTLPC¢Lw D*L¿D_LÁ GÃLÁ H>LÁHjLz H·LTH·L, H·K©HqK` HLK8GÃK8 D¿K8 D­K8D©K* DyJRDlI´ D_IPDYI: DTI#DTHÃ DXI!DtI( D±I.E:I4 EgI:E©I: G]I:HtH" I­F¯I­E6 I­CaHtBI G]A2E©A2'],
        xMin                       : 51,
        xMax                       : 548,
        yMin                       : -8,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["6"]                     = {
        // shapeCmds                  : [[[308,509],[414,504,487.5,433.5],[561,363,561,253],[561,144,485,68],[409,-8,301,-8],[190,-8,114,67.5],[38,143,38,253],[38,329,73,384],[288,722],[309,754,341,754],[366,754,382.5,737],[399,720,399,695],[399,676,388,660],[304,532],[295,520,289,508],[294,509,308,509]]],
        sC                         : ['F*I< G¡I2H´H$ J#F»J#E< J#CcH¯BJ GuA2E¿A2 D>A2C%BI A±CaA±E< A±FTBTGB E¥Lg F,M%FmM% FÁM%G?L§ GaLcGaL0 GaK­GJKk F!Ik E³IRE§I: E±I<F*I<'],
        // holeCmds                   : [[[[300,398],[238,398,196.5,356.5],[155,315,155,253],[155,191,196.5,149.5],[238,108,300,108],[362,108,403,149.5],[444,191,444,253],[444,314,402.5,356],[361,398,300,398]]]],
        hC                         : [['E½G_ DÁG_DKF® CyF8CyE< CyD@DKCn DÁB½E½B½ F¹B½GiCn H:D@H:E< H:F6GhF­ F·G_E½G_']],
        xMin                       : 38,
        xMax                       : 561,
        yMin                       : -8,
        yMax                       : 754,
        wdth                       : 600
      };
      hpb["7"]                     = {
        // shapeCmds                  : [[[193,-4],[170,-4,152,13.5],[134,31,134,54],[134,67,136,70],[381,628],[382,632,382,633],[382,636,378,636],[141,636],[119,636,103,653],[87,670,87,693],[87,716,103,733],[119,750,141,750],[421,750],[463,750,487,724],[511,698,511,660],[511,651,506,631],[245,31],[230,-4,193,-4]]],
        sC                         : ['DDA: C¹A:CsA^ CNA£CNB. CNBHCRBN G<K* G>K2G>K4 G>K:G6K: C]K: C0K:B³K] BqK¡BqL, BqLZB³L} C0LÁC]LÁ G¯LÁ HaLÁH³Lk I@L6I@Kk I@KXI6K0 E,A£ D±A:DDA:'],
        xMin                       : 87,
        xMax                       : 511,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["8"]                     = {
        sC                         : ["E½A2 DPA2CDB? B8CLB8Dµ B8EkBdFE B±FÃCVG] C­G« B§H±B§I» B§K>C|L5 DsM,E½M, G>M,H7L5 I0K>I0IÁ I0I*HTH< H(G« HÃF¿INFB I{EmI{Dµ I{CNHnB@ GaA2E½A2"],
        hC                         : [["GJFC F¥F¯E½F¯ E2F¯DiFC CÁE{CÁDµ CÁD*DiCa E2B¹E½B¹ F¡B¹GHCa GµD*GµDµ GµE{GJFC","F¹Jµ FcKFE½KF ERKFDÀJ´ DiJ]DiI¹ DiILD¿Hº EPHcE½Hc FcHcF¹H» GJINGJI¹ GJJ_F¹Jµ"]],
        xMin                       : 59,
        xMax                       : 540,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 600
      };
      hpb["9"]                     = {
        sC                         : ["E«D¿ D4E%BÄF3 A±G@A±H¿ A±JwC%K± D>M%E¹M% GuM%H¯K² J#JyJ#H¿ J#G§I_F¹ F0As E©A2EFA2 D·A2DtAT DRAwDRB( DRBNDiBo E³Do E¹DwE¾D¡ EÃD©F$D² F*D»F.DÁ F#D¿E«D¿"],
        hC                         : [["E»F{ F·F{GhGM H:GÃH:H¿ H:I»GhJl F·K>E»K> D¿K>DJJl CyI»CyH¿ CyH!DKGN DÁF{E»F{"]],
        xMin                       : 38,
        xMax                       : 561,
        yMin                       : -8,
        yMax                       : 754,
        wdth                       : 600
      };
      hpb["%"]                     = {
        shapeCmds                  : [
                                       [[278,4],[271,-3,264,-3],[251,-3,243,5],[235,13,235,26],[235,36,239,43],[604,735],[608,743,617,743],[618,743,620,742],[627,749,637,749],[648,749,655,741.5],[662,734,662,723],[662,712,657,705],[641,676],[294,17],[288,4,278,4]],
                                       [[548,53],[495,106,495,180],[495,254,548,307],[601,360,675,360],[749,360,802,307],[855,254,855,180],[855,106,802,53],[749,0,675,0],[601,0,548,53]],
                                       [[101,443],[48,496,48,570],[48,644,101,697],[154,750,228,750],[302,750,355,697],[408,644,408,570],[408,496,355,443],[302,390,228,390],[154,390,101,443]]
                                     ],  

        holeCmds                   : [
                                      [],
                                      [[[607.5,247.5],[580,220,580,180],[580,140,607.5,112.5],[635,85,675,85],[715,85,742.5,112.5],[770,140,770,180],[770,220,742.5,247.5],[715,275,675,275],[635,275,607.5,247.5]]],
                                      [[[160.5,637.5],[133,610,133,570],[133,530,160.5,502.5],[188,475,228,475],[268,475,295.5,502.5],[323,530,323,570],[323,610,295.5,637.5],[268,665,228,665],[188,665,160.5,637.5]]]
                                    ],
        xMin                       : 48,
        xMax                       : 855,
        yMin                       : -3,
        yMax                       : 750,
        wdth                       : 892
      };
      hpb["#"]                     = {
        sC                         : ['BwEu DHEu DsH% C2H% BTH%BTHi BTH©BgH¼ ByI,B»I, D©I, E#J¡E4K¡ E@L:ENLN E]LcE¥Lc EÁLcF0LS FBLDFBL* FBK·E±I, G»I, H6J¡HFK¡ HPL6H`LL HoLcHµLc I*LcI>LR IRLBIRL, IRL*IQKÃ IPK¹IPKµ HÃI, JaI, K<I,K<Hi K<H%J{H% H¯H% HaEu IÃEu J¡EuJ¡E0 J¡DoIÁDo HLDo HFD0H5C< H#BHGÁA¿ G¹AcGªAM GyA8GRA8 G4A8G"AI FµAZFµAq F·A¥ G#C%GFDo E:Do D¿B¿D¯A¿ D£AaDtAL DgA8D@A8 D#A8CµAH C£AXC£Aq C§A¯C§A» D2Do BuDo A¹DoA¹E0 A¹EuBwEu'],
        hC                         : [["G§H% E{H% EPEu GZEu G§H%"]],
        xMin                       : 42,
        xMax                       : 637,
        yMin                       : -5,
        yMax                       : 720,
        wdth                       : 673
      };
      hpb["$"]                     = {
        sC                         : ["EB?¯ D]?¯D]@« D]A< CXARB£AÁ B(BkAÃCV AÃC§B@D( BaDLB±DL CTDLC¡C{ D0B»E6B» E«B»FACS F{C±F{D_ F{D¹FeEB FNEoF#E® E{F(ETF9 E.FJDwF] AÁGLAÁI³ AÁK#BxK³ CPL}D]LÁ D]MV D]NTEBNT EqNTE¯N7 F(M½F(Mm F(LÁ F¥L«GLLM G¹KµH4K@ H:JÃH:J· H:JmG¸JR GqJ8G>J8 FwJ8F_Je F*KBE>KB DwKBDAJ® C¯JTC¯I¯ C¯IgCÀID D.I!D@H± DRH{D¢Ha E,HFE>H> EPH6E©GÁ G<GNG±Fj HaE§HaD_ HaCLGªBY G.AgF(AB F(@s F(@FE¯@) Eq?¯EB?¯"],
        xMin                       : 46,
        xMax                       : 463,
        yMin                       : -91,
        yMax                       : 841,
        wdth                       : 499
      };
      hpb["&"]                     = {
        xMin                       : 46,
        xMax                       : 463,
        yMin                       : -91,
        yMax                       : 841,
        wdth                       : 499
      };
      hpb["&"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["?"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["!"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["|"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["("]                     = {
        // shapeCmds                 : [[[51,541],[51,701,170,793],[185,805,205,805],[228,805,243.5,789.5],[259,774,259,751],[259,729,244,714],[196,667,181.5,623],[167,579,167,505],[167,198],[167,123,181.5,80],[196,37,244,-10],[259,-25,259,-48],[259,-70,243.5,-86],[228,-102,205,-102],[187,-102,170,-90],[51,4,51,162]]],
        sC                         : ['B(I} B(L<C¹Mu D4M¯D]M¯ D­M¯E)Mn EHMNEHLÃ EHLuE*LV DJKyD-JÃ C³JHC³I4 C³DN C³C8D-Bc DJA¯E*A. EH@³EH@c EH@6E)?¹ D­?wD]?w D8?wC¹?± B(AJB(C©'],
        xMin                       : 51,
        xMax                       : 259,
        yMin                       : -102,
        yMax                       : 805,
        wdth                       : 297
      };
      hpb[")"]                     = {
        // shapeCmds                 : [[[257,162],[257,2,139,-90],[124,-102,104,-102],[81,-102,65.5,-86.5],[50,-71,50,-48],[50,-24,64,-10],[112,38,126.5,80.5],[141,123,141,198],[141,505],[141,580,126.5,623.5],[112,667,64,714],[50,728,50,751],[50,774,65.5,789.5],[81,805,104,805],[122,805,139,793],[257,701,257,541]]],
        sC                         : ['EDC© EDAFCX?± C:?wBµ?w Be?wBE?¸ B%@4B%@c B%@µBBA. C!A±C?Bd C]C8C]DN C]I4 C]JJC?JÄ C!KyBBLV B%LsB%LÃ B%MNBEMn BeM¯BµM¯ C6M¯CXMu EDL<EDI}'],
        xMin                       : 50,
        xMax                       : 257,
        yMin                       : -102,
        yMax                       : 805,
        wdth                       : 295
      };
      hpb["-"]                     = {
        shapeCmds                  : [[[106,332],[308,332],[374,332,374,287],[374,242,308,242],[123,242],[57,242,57,287],[57,308,70,320],[83,332,106,332]]],
        xMin                       : 57,
        xMax                       : 374,
        yMin                       : 242,
        yMax                       : 332,
        wdth                       : 412
      };
      hpb["_"]                     = {
        shapeCmds                  : [[[57,-127],[57,-64],[613,-64],[613,-127],[57,-127]]],
        xMin                       : 57,
        xMax                       : 613,
        yMin                       : -127,
        yMax                       : -64,
        wdth                       : 651
      };
      hpb["="]                     = {
        fullPath                   : "M 107 306 L 107 306 L 465 306 Q 514 306 514 261 L 514 261 Q 514 255 513 253 L 513 253 Q 514 250 514 245 L 514 245 Q 514 200 465 200 L 465 200 L 107 200 Q 58 200 58 245 L 58 245 L 58 253 L 58 261 Q 58 306 107 306 Z",
        shapeCmdsOrig              : [[[107,306],[465,306],[514,306,514,261],[514,255,513,253],[514,250,514,245],[514,200,465,200],[107,200],[58,200,58,245],[58,253],[58,261],[58,306,107,306]]],
        shapeCmds                  : [
                                      [[107,306-60 ],[465,306-60 ],[514,306-60 ,514,261-60 ],[514,255-60 ,513,253-60 ],[514,250-60 ,514,245-60 ],[514,200-60 ,465,200-60 ],[107,200-60 ],[58,200-60 ,58,245-60 ],[58,253-60 ],[58,261-60 ],[58,306-60 ,107,306-60 ]],
                                      [[107,306+130],[465,306+130],[514,306+130,514,261+130],[514,255+130,513,253+130],[514,250+130,514,245+130],[514,200+130,465,200+130],[107,200+130],[58,200+130,58,245+130],[58,253+130],[58,261+130],[58,306+130,107,306+130]]
                                     ],
        xMin                       : 58,
        xMax                       : 514,
        yMin                       : 200,
        yMax                       : 306,
        wdth                       : 553
      };
      hpb["+"]                     = {
        sC                         : ["B¯E¹ E(E¹ E(H0 E(H{E=H¹ ERI2E£I2 F.I2FCH¸ FXHyFXH0 FXE¹ HqE¹ IuE¹IuE> IuDgHqDg FXDg FXBN FXA§FCAh F.AJE£AJ ERAJE=Ah E(A§E(BN E(Dg B±Dg A¯DgA¯E> A¯EsB-E§ BNE¹B¯E¹"],
        xMin                       : 37,
        xMax                       : 537,
        yMin                       : 4,
        yMax                       : 504,
        wdth                       : 572
      };
      hpb[","]                     = {
        // fullPath                   : "M 43 65 Q 43 88 57 103 Q 71 118 91 118 Q 115 118 128.5 101 Q 142 84 142 59 L 142 -51 Q 142 -61 133 -69 Q 124 -77 114 -77 Q 96 -77 74.5 -30.5 Q 53 16 43 65 Z",
        // shapeCmds                  : [[[43,65],[43,88,57,103],[71,118,91,118],[115,118,128.5,101],[142,84,142,59],[142,-51],[142,-61,133,-69],[124,-77,114,-77],[96,-77,74.5,-30.5],[53,16,43,65]]],
        sC                         : ['A»BD A»BsB4B³ BPC.ByC. C(C.CCB¯ C_BkC_B8 C_@] C_@HCL@8 C:@(C%@( B¥@(BW@¨ B,AcA»BD'],
        xMin                       : 43,
        xMax                       : 142,
        yMin                       : -77,
        yMax                       : 118,
        wdth                       : 180
      };
      hpb["."]                     = {
        // shapeCmds                  : [[[66,10.5],[51,25,51,45],[51,65,66.5,80.5],[82,96,103,96],[122,96,137,80.5],[152,65,152,45],[152,25,137.5,10.5],[123,-4,103,-4],[81,-4,66,10.5]]],
        sC                         : ['BFAW B(AuB(A¿ B(BDBGBd BgB¥B³B¥ C6B¥CTBd CsBDCsA¿ CsAuCUAW C8A:B³A: BeA:BFAW'],
        xMin                       : 51,
        xMax                       : 152,
        yMin                       : -4,
        yMax                       : 96,
        wdth                       : 190
      };
      hpb[nbsp]                    = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb[" "]                     = hpb[nbsp];

  /*
// https://opentype.js.org/glyph-inspector.html
function coordinates(cmd){
  if(cmd.x1){
    return " "+cmd.x1+" "+(0-cmd.y1)+" "+cmd.x+" "+(0-cmd.y)
  }else{
    if(cmd.x){
      return " "+cmd.x+" "+(0-cmd.y)
    }else{
      return ""
    }
  }
};
function makeD(path){
  var d  = "";
  path.commands.forEach(function(cmd){d+=" "+cmd.type+coordinates(cmd)});
  return d.slice(1)
}
*/

      return hpb;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  HELVETICANEUE  HELVETICANEUE  HELVETICANEUE
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:false,reverseShapes:true},nbsp=' ';

      font["0"]        = {
        sC      : [
                           'EoLV G¡LVHwJc IRI*IRF¡ IRDRHwB½ G¡A%EoA% C_A%BgB½ A­DRA­F¡ A­I*BgJc C_LVEoLV'
                         ],
        hC       : [
                           ['EoBe GoBeGoF¡ GoJ»EoJ» CoJ»CoF¡ CoBeEoBe']
                         ],
        xMin           : 36,
        xMax           : 520,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["1"]        = {
        sC      : [
                           'D§HÁ B,HÁ B,JR CHJPD4J© E,KDEDL: F¡L: F¡AB D§AB D§HÁ'
                         ],
        xMin           : 53,
        xMax           : 350,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["2"]        = {
        sC      : [
                           'D!B± ILB± ILAB A³AB AµC£DDET E#E·E¥FT FoFÃG#Ge GiH<GkHÃ GmI£G>JB F¥J»E¡J» C»J»C±H: B*H: B*J*C%K< D(LVE¯LV GuLVHoKB INJLINI( ING*F¹EP F!D¥E.D4 D<C]D!B±'
                         ],
        xMin           : 39,
        xMax           : 518,
        yMin           : 0,
        yMax           : 714,
        wdth           : 556
      };
      font["3"]        = {
        sC      : [
                           'D­FL D­Gw E¯GqF_H! G@HZG@IR G@J*F¦Jb FFJ»EgJ» DwJ»D8JC C{IoC¡H{ A½H{ B#JLB¿KN C¿LVEkLV F¿LVG»Ky I#J³I#Ia I#G{G_G4 G_G0 HTF»H»F9 I]EZI]DR I]BµHHA½ G<A%EmA% C£A%B¡B, A§C,A£D± CeD± CaC­D#C: DkBeEmBe FcBeG-C& GyCkGyD_ GyF]D­FL'
                         ],
        xMin           : 31,
        xMax           : 525,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["4"]        = {
        sC      : [
                           'H!EB IVEB IVC± H!C± H!AB FJAB FJC± AsC± AsEq FJL: H!L: H!EB'
                         ],
        hC       : [
                           ['FJJ* FFJ* C!EB FJEB FJJ*']
                         ],
        xMin           : 24,
        xMax           : 522,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["5"]        = {
        sC      : [
                           'C©F< B!F< C8L: H¯L: H¯Jo DcJo C½G­ CÁG© D¡HqEÃHq GmHqHeGk IVFkIVD¿ IVCZHgBN GaA%EsA% CÃA%B¿Aµ A³B§A«DP CmDP CwCaD:C! D¡BeEoBe GsBeGsD» GsE·G2Fe FkG<EiG< D6G<C©F<'
                         ],
        xMin           : 35,
        xMax           : 522,
        yMin           : -14,
        yMax           : 700,
        wdth           : 556
      };
      font["6"]        = {
        sC      : [
                           'I<IX GXIX GPJ.F½Jd FeJ»E¯J» DkJ»D#Io C{H«CkG8 CoG4 DLHZE¿HZ GiHZHcGT IVFRIVD§ IVC6HUB. GTA%E§A% CgA%BkB} A©D*A©F¥ A©I%B{Jk C©LVE¹LV G@LVH:Kl I4J£I<IX'
                         ],
        hC       : [
                           ['E}Be FqBeG4C> GsC³GsD« GsE£G2FS FsG%E}G% D§G%D@FP C£E¥C£D« C£C±D@C> D©BeE}Be']
                         ],
        xMin           : 34,
        xMax           : 522,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["7"]        = {
        sC      : [
                           'G_Jo A«Jo A«L: IFL: IFJ} EmFeE<AB CBAB CXC£DqFD E}HoG_Jo'
                         ],
        xMin           : 35,
        xMax           : 514,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["8"]        = {
        sC             : [
                           'EoA% C·A%B­AÀ A£B·A£D_ A£EaBEF; B­F¹C£G4 C£G6 B:G§B:IX B:J¯C,Kr CÁLVEoLV G>LVH0Kr I!J¯I!IX I!G§G]G6 G]G4 HRF¹HºF; I]EaI]D_ I]B·HRAÀ GHA%EoA%'
                         ],
        hC             : [
                           ['EoBZ FcBZG-BÃ GyCgGyD_ GyEPG-Eµ FcFTEoFT D{FTD/Eµ CeEPCeD_ CeCgD/BÃ D{BZEoBZ','EoK! D±K!DPJj CµJ0CµIL CµHmDOH5 D¯G¡EoG¡ FPG¡F°H5 GJHmGJIL GJJ0F¯Jj FNK!EoK!']
                         ],
        xMin           : 31,
        xMax           : 525,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["9"]        = {
        sC             : [
                           'AÃD# C§D# C¯CNDBB¼ DyBeEPBe FsBeG8C³ GcDuGsFD GoFH F³DÃE@DÃ C{DÃB£EÄ A©G!A©Hy A©JJBªKP C«LVEiLV G}LVHuJ¥ IVIRIVF{ IVDVHcBµ GVA%EFA% C¿A%C!A´ B(B}AÃD#'
                         ],
        hC             : [
                           ['E_J» DiJ»D%JB CkIuCkH{ CkG¡D%G. DiFTE_FT FXFTF¿G. G]G¡G]H{ G]IsF½JE FXJ»E_J»']
                         ],
        xMin           : 34,
        xMax           : 522,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["a"]        = {
        sC             : [
                           'H¿G< H¿C( H¿BZIRBZ IsBZI­B_ I­A@ I@A%H{A% GcA%GJB# FJA%DeA% CNA%BoAs A¥BDA¥CT A¥D£B¥EL CPE{D³E¹ FiF6FiF6 GFFRGFG( GFH4EqH4 C½H4C¯F³ B(F³ B<IiE¡Ii G(IiG»I# H¿HTH¿G<'
                         ],
        hC             : [
                           ['G8CÁ G8EH F¯E,F8DÁ EmD·DÃD­ CgDkCgC_ CgB½D2Bw DmBZE8BZ E·BZF_B© G8C<G8CÁ']
                         ],
        xMin           : 32,
        xMax           : 548,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["á"]        = supplement(font.a,"acute",158,0);
      font["à"]        = supplement(font.a,"grave",158,0);
      font["ä"]        = supplement(font.a,"dieresis",158,0);
      font["â"]        = supplement(font.a,"circumflex",158,0);
      font["å"]        = supplement(font.a,"ring",158,0);
      font["æ"]        = {
        sC             : [
                           'LµC« NwC« NJBeMLA¨ LNA%K!A% HµA%H%Be G%A%DyA% CVA%BqAs A¥BBA¥CT A¥D£B¥EL CPE{D³E¹ F]F4FcF6 G:FPG:G( G:H4EqH4 C½H4C¯F³ B(F³ B4HHCBHÃ D8IiEyIi GyIiHVH] I@IiJÁIi L¯IiM­HP N£GBN£EL N£E,N¡D¯ H³D¯ H±C¯IPC8 I»BZJÁBZ LTBZLµC«'
                         ],
        hC             : [
                           ['G8D* G8ED F½E(FBD¿ EsD·E!D­ CgDmCgC_ CgBZE6BZ E¿BZFgB³ G8CJG8D*','H³F! L½F! L¿FÁLVGj K³H4J·H4 IÃH4IZGc H»F»H³F!']
                         ],
        xMin           : 32,
        xMax           : 863,
        yMin           : -14,
        yMax           : 531,
        wdth           : 889
      };
      font["b"]        = {
        sC             : [
                           'C»AB B@AB B@LV D#LV D#HF D(HF DVH³E,I< E¥IiF]Ii HFIiIHHF J@G2J@EB J@CaITBL HZA%F¥A% DsA%C¿BP C»BP C»AB'
                         ],
        hC             : [
                           ['H]EF H]F]G·GD GDH4F>H4 E2H4DhGR C¿FqC¿EF C¿D%DkC@ E8BZF>BZ GNBZG¿CL H]D.H]EF']
                         ],
        xMin           : 63,
        xMax           : 575,
        yMin           : -14,
        yMax           : 714,
        wdth           : 611
      };
      font["c"]        = {
        sC             : [
                           'IXFs GuFs GXH4E«H4 D¹H4DNGo CmF±CmE< CmD*D*CJ DuBZE¡BZ FcBZG"B¼ GeCXGuDF IXDF H¹A%E¡A% CµA%B­B@ A«CPA«E< A«G2B«HH C³IiE©Ii GDIiH@H¯ IHH(IXFs'
                         ],
        xMin           : 35,
        xMax           : 523,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["ç"]        = {
        sC             : [
                           'GuDF IXDF H½A<F(A* Ec@N Ec@J Es@PF#@P Fg@PF¹@, GN?¥GN?< GN>_F£>. F@=«E]=« DV=«C±>2 D2>¥ Dµ>cE4>c F.>cF.?4 F.?XEµ?m Ew?£ER?£ E%?£D§?m DX?µ EJA* CuA:B}BP A«C_A«E< A«G2B«HH C³IiE©Ii GDIiH@H¯ IHH(IXFs GuFs GXH4E«H4 D¹H4DNGo CmF±CmE< CmD*D*CJ DuBZE¡BZ FcBZG"B¼ GeCXGuDF'
                         ],
        xMin           : 35,
        xMax           : 523,
        yMin           : -221,
        yMax           : 531,
        wdth           : 556
      };
      font["č"]        = supplement(font.c,"caron",158,0);
      font["d"]        = {
        sC             : [
                           'H#LV I«LV I«AB H0AB H0BN H,BN GVA%EmA% C£A%B£BF A«CZA«EN A«GVB·Hi C±IiEHIi G<IiGÃHF H#HF H#LV'
                         ],
        hC             : [
                           ['CmE< CmD*D0CH D¡BZE­BZ F»BZGiCN H,D2H,EH H,FsG`GS FµH4E±H4 D{H4D,G> CmFZCmE<']
                         ],
        xMin           : 35,
        xMax           : 547,
        yMin           : -14,
        yMax           : 714,
        wdth           : 611
      };
      font["e"]        = {
        sC             : [
                           'IeD¯ CmD¯ CmC­D0C6 D{BZE¥BZ GBBZG¡C© IVC© I2BaH1A¦ G0A%E¥A% C·A%B±B< A«CRA«EF A«G*B±HF C¿IiE}Ii GVIiHcHH IiG2IiEX IiE2IeD¯'
                         ],
        hC             : [
                           ['CmF! G£F! G{F·G3Ge FmH4E}H4 D«H4D<Gg CqF»CmF!']
                         ],
        xMin           : 35,
        xMax           : 531,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["é"]        = supplement(font.e,"acute",158,0);
      font["è"]        = supplement(font.e,"grave",158,0);
      font["ë"]        = supplement(font.e,"dieresis",158,0);
      font["ê"]        = supplement(font.e,"circumflex",158,0);
      font["f"]        = {
        sC      : [
                           'B¡H! ATH! ATIL B¡IL B¡J! B¡KVCVKÃ C»LVD¿LV E­LVF<LH F<J¹ E³K!ERK! DcK!DcJ6 DcIL F#IL F#H! DcH! DcAB B¡AB B¡H!'
                         ],
        xMin           : 9,
        xMax           : 317,
        yMin           : 0,
        yMax           : 714,
        wdth           : 315
      };
      font["g"]        = {
        sC             : [
                           'GµIL IwIL IwAy Iw>(E{>( DF>(CL>o B:?BB,@k C³@k D0?RE«?R Gµ?RGµAZ GµBy G±By G(ABEXAB CoABBwBe A«CsA«Ec A«G<B§HN C©IiE]Ii G:IiG±H> GµH> GµIL'
                         ],
        hC             : [
                           ['E}Bw F«BwGRCi GµDJGµE_ GµFqGRGL F«H4E}H4 DqH4D(G@ CmFaCmEL CmD@D,Cc DwBwE}Bw']
                         ],
        xMin           : 35,
        xMax           : 538,
        yMin           : -205,
        yMax           : 531,
        wdth           : 593
      };
      font["h"]        = {
        sC             : [
                           'CÁAB B:AB B:LV CÁLV CÁHD D!HD DNH¯DÄI: EuIiFXIi G§IiHfH± IFH4IFF« IFAB GcAB GcFL GcH4E»H4 E(H4DdGg CÁF»CÁF# CÁAB'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : 0,
        yMax           : 714,
        wdth           : 574
      };
      font["i"]        = {
        sC             : [
                           'D#J¡ B@J¡ B@LV D#LV D#J¡',
                           'D#AB B@AB B@IL D#IL D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 714,
        wdth           : 241
      };
      font["ı"]        = {
        sC             : [
                           'D#AB B@AB B@IL D#IL D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 500,
        wdth           : 241
      };
      font["í"]        = supplement(font["ı"],"acute",0,0);
      font["ì"]        = supplement(font["ı"],"grave",0,0);
      font["ï"]        = supplement(font["ı"],"dieresis",0,0);
      font["î"]        = supplement(font["ı"],"circumflex",0,0);
      font["j"]        = {
        sC      : [
                           'D#J¡ B@J¡ B@LV D#LV D#J¡',
                           'B@@u B@IL D#IL D#@k D#>(A}>( AR>(@¹>0 @¹?e AR?]Ae?] AÁ?]B2?¥ B@?ÃB@@u'
                         ],
        xMin           : -22,
        xMax           : 177,
        yMin           : -205,
        yMax           : 714,
        wdth           : 241
      };
      font["k"]        = {
        sC      : [
                           'D#AB B@AB B@LV D#LV D#F* G@IL IXIL FLFP I¡AB GiAB E,E8 D#D4 D#AB'
                         ],
        xMin           : 63,
        xMax           : 542,
        yMin           : 0,
        yMax           : 714,
        wdth           : 537
      };
      font["l"]        = {
        sC             : [
                           'D#AB B@AB B@LV D#LV D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 714,
        wdth           : 241
      };
      font["m"]        = {
        sC             : [
                           'CÁAB B:AB B:IL CµIL CµH< C»H< D­IiFVIi H4IiHyH< IuIiK<Ii M¹IiM¹F¯ M¹AB L2AB L2EÁ L2G0K¹Gg KqH4JwH4 H½H4H½EÃ H½AB G6AB G6FZ G6GJF°G¢ FeH4E£H4 E!H4DaGm CÁG#CÁF( CÁAB'
                         ],
        xMin           : 60,
        xMax           : 810,
        yMin           : 0,
        yMax           : 531,
        wdth           : 870
      };
      font["n"]        = {
        sC             : [
                           'CÁAB B:AB B:IL CµIL CµH4 C¹H0 D§IiFXIi G§IiHfH± IFH4IFF« IFAB GcAB GcFL GcH4E»H4 E(H4DdGg CÁF»CÁF# CÁAB'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : 0,
        yMax           : 531,
        wdth           : 574
      };
      font["ñ"]        = supplement(font.n,"tilde",167,0);
      font["ń"]        = supplement(font.n,"acute",167,0);
      font["o"]        = {
        sC             : [
                           'E·A% CÃA%BµB@ A­CTA­EH A­G:B¸HQ CÃIiE·Ii G«IiH¹HN IÁG:IÁEH IÁCTH¹B@ G«A%E·A%'
                         ],
        hC             : [
                           ['E·BZ G#BZGuCN H:D2H:EH H:F]GuG@ G#H4E·H4 D§H4D4G@ CoF]CoEH CoD2D4CN D§BZE·BZ']
                         ],
        xMin           : 36,
        xMax           : 558,
        yMin           : -14,
        yMax           : 531,
        wdth           : 593
      };
      font["ô"]        = supplement(font.o,"circumflex",176,0);
      font["ò"]        = supplement(font.o,"grave",176,0);
      font["ó"]        = supplement(font.o,"acute",176,0);
      font["ö"]        = supplement(font.o,"dieresis",176,0);
      font["p"]        = {
        sC             : [
                           'D#>D B@>D B@IL C»IL C»H@ C¿H@ DyIiF]Ii HFIiIHHF J@G2J@EB J@CaITBL HZA%F¥A% D±A%D(BH D#BH D#>D'
                         ],
        hC             : [
                           ['H]EF H]F]G·GD GDH4F>H4 E2H4DhGR C¿FqC¿EF C¿D%DkC@ E8BZF>BZ GNBZG¿CL H]D.H]EF']
                         ],
        xMin           : 63,
        xMax           : 575,
        yMin           : -191,
        yMax           : 531,
        wdth           : 611
      };
      font["q"]        = {
        sC             : [
                           'H0IL I«IL I«>D H#>D H#BH GÃBH G:A%EFA% CoA%BuBL A«CaA«EB A«G2B£HF C¥IiEmIi GPIiH,H@ H0H@ H0IL'
                         ],
        hC             : [
                           ['CmEF CmD.D.CL D{BZE­BZ F½BZGgC@ H,CÁH,EF H,FqGbGR F¹H4E­H4 D§H4D4GD CmF]CmEF']
                         ],
        xMin           : 35,
        xMax           : 547,
        yMin           : -191,
        yMax           : 531,
        wdth           : 611
      };
      font["r"]        = {
        sC             : [
                           'CÁAB B:AB B:IL C³IL C³G§ C·G§ D(HZD¥HÄ E]IiFBIi F]IiF»Ic F»G© FHG³F6G³ E<G³DqG4 CÁFTCÁE. CÁAB'
                         ],
        xMin           : 60,
        xMax           : 363,
        yMin           : 0,
        yMax           : 531,
        wdth           : 352
      };
      font["s"]        = {
        sC             : [
                           'A¥C± CgC± CwBZEPBZ G<BZG6Cc G2DBE¥Dm C]E4CDE@ A»E¯A»G@ A»HZC*I( CÁIiEHIi FwIiGgHÃ HeHLHyG* F­G* FqH4E8H4 C}H4C}GJ C}F¥DgF] D{FTFLF# GiE£H2EL H½D£H½Cw H½BLG§As F©A%ELA% C£A%B«A¡ A§B_A¥C±'
                         ],
        xMin           : 32,
        xMax           : 492,
        yMin           : -14,
        yMax           : 531,
        wdth           : 519
      };
      font["t"]        = {
        sC             : [
                           'B¡H! ARH! ARIL B¡IL B¡K¥ DcK¥ DcIL F0IL F0H! DcH! DcC{ DcC*DsB³ D«BmEPBm E³BmF0Bu F0AD D½A8D¿A8 CuA8C4A} B¡B4B¡C@ B¡H!'
                         ],
        xMin           : 8,
        xMax           : 311,
        yMin           : -5,
        yMax           : 672,
        wdth           : 333
      };
      font["u"]        = {
        sC             : [
                           'GcIL IFIL IFAB GgAB GgBR GcBR G8A©FfAV EµA%E<A% B:A%B:D< B:IL CÁIL CÁDR CÁBZEeBZ GcBZGcDu GcIL'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : -14,
        yMax           : 517,
        wdth           : 574
      };
      font["ú"]        = supplement(font.u,"acute",167,0);
      font["ù"]        = supplement(font.u,"grave",167,0);
      font["ü"]        = supplement(font.u,"dieresis",167,0);
      font["û"]        = supplement(font.u,"circumflex",167,0);
      font["v"]        = {
        sC      : [
                           'FLAB DLAB ATIL CLIL ERC2 EVC2 GRIL I>IL FLAB'
                         ],
        xMin           : 9,
        xMax           : 510,
        yMin           : 0,
        yMax           : 517,
        wdth           : 519
      };
      font["w"]        = {
        sC      : [
                           'E¯AB C¿AB A]IL CNIL D»CH D¿CH F_IL HDIL I¡CH I¥CH KTIL M<IL JyAB H±AB GNGB GJGB E¯AB'
                         ],
        xMin           : 13,
        xMax           : 765,
        yMin           : 0,
        yMax           : 517,
        wdth           : 778
      };
      font["x"]        = {
        sC      : [
                           'CVAB AJAB DPEc AkIL C¡IL EVF± G8IL I@IL FaEo ImAB GZAB ETD@ CVAB'
                         ],
        xMin           : 4,
        xMax           : 533,
        yMin           : 0,
        yMax           : 517,
        wdth           : 537
      };
      font["y"]        = {
        sC      : [
                           'D6@w DPAF AHIL CBIL EPCH ETCH GZIL IHIL F6@­ Es?RE>>µ Di>(CH>( By>(B*>4 B*?u B¡?gB¹?g C_?gC§?± CÁ@*D6@w'
                         ],
        xMin           : 3,
        xMax           : 515,
        yMin           : -205,
        yMax           : 517,
        wdth           : 519
      };
      font["ÿ"]        = supplement(font.y,"dieresis",139,0);
      font["z"]        = {
        sC      : [
                           'F*G» A¹G» A¹IL H_IL H_H, C±Bw H}Bw H}AB AoAB AoBc F*G»'
                         ],
        xMin           : 22,
        xMax           : 477,
        yMin           : 0,
        yMax           : 517,
        wdth           : 500
      };
      font["A"]        = {
        sC      : [
                           'C6AB A4AB EXLV GcLV K«AB I}AB HwD< D<D< C6AB'
                         ],
        hC       : [
                           ['F_Ja FXJa D£E{ H4E{ F_Ja']
                         ],
        xMin           : -7,
        xMax           : 675,
        yMin           : 0,
        yMax           : 714,
        wdth           : 667
      };
      font["Á"]        = supplement(font.A,"acute",197,213);
      font["À"]        = supplement(font.A,"grave",197,213);
      font["Ã"]        = supplement(font.A,"tilde",197,213);
      font["Â"]        = supplement(font.A,"circumflex",197,213);
      font["Ä"]        = supplement(font.A,"dieresis",197,213);
      font["Å"]        = supplement(font.A,"ring",197,213);
      font["Æ"]        = {
        sC             : [
                           'CJAB A4AB F{LV O{LV O{J¡ JBJ¡ JBG« ONG« ONF< JBF< JBB½ O©B½ O©AB HTAB HTD0 DwD0 CJAB'
                         ],
        hC             : [
                           ['HTJ¡ G¯J¡ EREo HTEo HTJ¡']
                         ],
        xMin           : -7,
        xMax           : 930,
        yMin           : 0,
        yMax           : 714,
        wdth           : 963
      };
      font["B"]        = {
        sC      : [
                           'GkAB BZAB BZLV G³LV IVLVJGK} K8K!K8Iu K8G¿ImGD ImG@ KyF©KyDP KyBÁJ}B6 IsABGkAB'
                         ],
        hC       : [
                           ['G±FL DTFL DTB± G±B± I¡B±I¡Dq I¡FLG±FL','GmJ­ DTJ­ DTG£ GmG£ HHG£H¦H4 I>HiI>IF I>J­GmJ­']
                         ],
        xMin           : 76,
        xMax           : 667,
        yMin           : 0,
        yMax           : 714,
        wdth           : 704
      };
      font["C"]        = {
        sC      : [
                           'K»H³ IÁH³ IVK,G:K, EeK,DoI¥ C«HoC«F¯ C«E*DoC¹ EeBmG:Bm HZBmI<CZ I¹D>J%Ec K½Ec K­CaJdB@ I<@ÃG:@Ã D¥@ÃCDB¡ A±DPA±F¯ A±IJCDJ¿ D¥LyG:Ly I0LyJVKy K¥JsK»H³'
                         ],
        xMin           : 38,
        xMax           : 684,
        yMin           : -17,
        yMax           : 731,
        wdth           : 722
      };
      font["D"]        = {
        sC      : [
                           'G*AB BZAB BZLV G*LV IeLVJ­J§ KÃIHKÃF¯ KÃDPJ­B· IeABG*AB'
                         ],
        hC       : [
                           ['FJJ­ DTJ­ DTB± FJB± HZB±ILD! J%D½J%F¯ J%H¡ILIw HZJ­FJJ­']
                         ],
        xMin           : 76,
        xMax           : 687,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["E"]        = {
        sC      : [
                           'JmAB BZAB BZLV J_LV J_J¡ DTJ¡ DTG« J#G« J#F< DTF< DTB½ JmB½ JmAB'
                         ],
        xMin           : 76,
        xMax           : 597,
        yMin           : 0,
        yMax           : 714,
        wdth           : 630
      };
      font["É"]        = supplement(font.E,"acute",195,197);
      font["È"]        = supplement(font.E,"grave",195,197);
      font["Ê"]        = supplement(font.E,"circumflex",195,197);
      font["Ë"]        = supplement(font.E,"dieresis",195,197);
      font["F"]        = {
        sC      : [
                           'DTAB BZAB BZLV J4LV J4J¡ DTJ¡ DTG« IZG« IZF< DTF< DTAB'
                         ],
        xMin           : 76,
        xMax           : 569,
        yMin           : 0,
        yMax           : 714,
        wdth           : 593
      };
      font["G"]        = {
        sC      : [
                           'GXG2 L8G2 L8AB J»AB JsBk I³A{I-AM HJ@ÃGD@Ã D¯@ÃCNB¡ A»DPA»F¯ A»IHCNJ¿ D¯LyGDLy I8LyJ]K} K¯J{L(H³ J4H³ J!I»I6Je HRK,GDK, EoK,DyI¥ CµHoCµF¯ CµE*DyC¹ EmBoGDBm H¥BkIjCS JPD<JTEu GXEu GXG2'
                         ],
        xMin           : 43,
        xMax           : 699,
        yMin           : -17,
        yMax           : 731,
        wdth           : 759
      };
      font["H"]        = {
        sC      : [
                           'DNAB BTAB BTLV DNLV DNGÁ IXGÁ IXLV KRLV KRAB IXAB IXFF DNFF DNAB'
                         ],
        xMin           : 73,
        xMax           : 648,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["I"]        = {
        sC      : [
                           'DTAB BZAB BZLV DTLV DTAB'
                         ],
        xMin           : 76,
        xMax           : 201,
        yMin           : 0,
        yMax           : 714,
        wdth           : 278
      };
      font["J"]        = {
        sC      : [
                           'FcLV H]LV H]D± H]C,G­B: F¿@ÃD©@Ã C.@ÃB@B# A]B½A]Dk A]E6 CVE6 CVDm CVCmC£C0 D.BmD½Bm E±BmF:C4 FcCqFcD£ FcLV'
                         ],
        xMin           : 13,
        xMax           : 461,
        yMin           : -17,
        yMax           : 714,
        wdth           : 537
      };
      font["K"]        = {
        sC      : [
                           'DTAB BZAB BZLV DTLV DTGL IPLV K§LV GJG¿ L,AB IuAB EÃFm DTE! DTAB'
                         ],
        xMin           : 76,
        xMax           : 693,
        yMin           : 0,
        yMax           : 714,
        wdth           : 685
      };
      font["L"]        = {
        sC      : [
                           'J*AB BZAB BZLV DTLV DTB½ J*B½ J*AB'
                         ],
        xMin           : 76,
        xMax           : 564,
        yMin           : 0,
        yMax           : 714,
        wdth           : 574
      };
      font["M"]        = {
        sC             : [
                           'DDAB BVAB BVLV E6LV H@Cy HDCy KDLV MÃLV MÃAB L2AB L2I³ L.I³ I!AB GTAB DHI³ DDI³ DDAB'
                         ],
        xMin           : 74,
        xMax           : 815,
        yMin           : 0,
        yMax           : 714,
        wdth           : 889
      };
      font["N"]        = {
        sC             : [
                           'D>AB BPAB BPLV DXLV IeD: IiD: IiLV KVLV KVAB INAB DDI] D>I] D>AB'
                         ],
        xMin           : 71,
        xMax           : 650,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["Ñ"]        = supplement(font.N,"tilde",197,241);
      font["O"]        = {
        sC             : [
                           'G:Ly IsLyK0J¿ LgIHLgF¯ LgDPK0B¡ Is@ÃG:@Ã D¥@ÃCDB¡ A±DPA±F¯ A±IHCDJ¿ D¥LyG:Ly'
                         ],
        hC             : [
                           ['G:K, EeK,DoI¥ C«HoC«F¯ C«E*DoC¹ EeBmG:Bm H³BmI©C¹ JmE*JmF¯ JmHoI©I¥ H³K,G:K,']
                         ],
        xMin           : 38,
        xMax           : 722,
        yMin           : -17,
        yMax           : 731,
        wdth           : 760
      };
      font["Ó"]        = supplement(font.O,"acute",260,197);
      font["Ò"]        = supplement(font.O,"grave",260,197);
      font["Ô"]        = supplement(font.O,"circumflex",260,197);
      font["Ö"]        = supplement(font.O,"dieresis",260,197);
      font["Õ"]        = supplement(font.O,"tilde",260,197);
      font["P"]        = {
        sC             : [
                           'DTAB BZAB BZLV GPLV IaLVJ]K< K6JLK6H¿ K6GoJ]F£ IaEgGPEg DTEg DTAB'
                         ],
        hC             : [
                           ['GFJ­ DTJ­ DTG2 GBG2 H%G2HkGe I<H!I<HÁ I<J­GFJ­']
                         ],
        xMin           : 76,
        xMax           : 634,
        yMin           : 0,
        yMax           : 714,
        wdth           : 667
      };
      font["Q"]        = {
        sC             : [
                           'J¿Bi LTAH KZ@@ I­Aw Hs@ÃG:@Ã D¥@ÃCDB¡ A±DPA±F¯ A±IHCDJ¿ D¥LyG:Ly IsLyK0J¿ LgIHLgF¯ LgD*J¿Bi'
                         ],
        hC             : [
                           ['HZB± GJC¯ HBD¹ IqC¡ JmDµJmF¯ JmHoI©I¥ H³K,G:K, EeK,DoI¥ C«HoC«F¯ C«E*DoC¹ EeBmG:Bm G·BmHZB±']
                         ],
        xMin           : 38,
        xMax           : 722,
        yMin           : -65,
        yMax           : 731,
        wdth           : 760
      };
      font["R"]        = {
        sC             : [
                           'DTAB BZAB BZLV G§LV ImLVJeKr K]J¯K]IT K]G>IqFm IqFi KDFJKDD: KDA¹KµAB I©AB IaA£IaB· IaDcI(E4 HkE±GDE± DTE± DTAB'
                         ],
        hC             : [
                           ['GkJ­ DTJ­ DTGL GoGL IcGLIcI0 IcJ­GkJ­']
                         ],
        xMin           : 76,
        xMax           : 680,
        yMin           : 0,
        yMax           : 714,
        wdth           : 704
      };
      font["S"]        = {
        sC             : [
                           'A§DÁ C¡DÁ C¡C¥DiC2 EFBmFiBm G¥BmHRC0 H¹CkH¹DD H¹EHGÃEu G³E{DwFk B:G@B:IT B:JÁC_Kµ DqLyFDLy H.LyIFK§ JiJ©JiI0 HoI0 H_K,F:K, ERK,D¯J© D4JTD4Is D4HiE_H; F«G±H{GL I£G#JLF8 J³EVJ³Da J³B£I_A« HD@ÃFX@Ã DT@ÃC6A½ A«BÃA§DÁ'
                         ],
        xMin           : 33,
        xMax           : 615,
        yMin           : -17,
        yMax           : 731,
        wdth           : 648
      };
      font["T"]        = {
        sC             : [
                           'D¹J¡ ARJ¡ ARLV JVLV JVJ¡ F³J¡ F³AB D¹AB D¹J¡'
                         ],
        xMin           : 8,
        xMax           : 586,
        yMin           : 0,
        yMax           : 714,
        wdth           : 593
      };
      font["U"]        = {
        sC             : [
                           'BJED BJLV DDLV DDE¹ DDDTDsC£ E<ByF·By HmByI6C£ IeDTIeE¹ IeLV K_LV K_ED K_C8J>B( I#@ÃF·@Ã D§@ÃCmB( BJC8BJED'
                         ],
        xMin           : 68,
        xMax           : 654,
        yMin           : -17,
        yMax           : 714,
        wdth           : 722
      };
      font["Ú"]        = supplement(font.U,"acute",241,197);
      font["Ù"]        = supplement(font.U,"grave",241,197);
      font["Û"]        = supplement(font.U,"circumflex",241,197);
      font["Ü"]        = supplement(font.U,"dieresis",241,197);
      font["V"]        = {
        sC             : [
                           'G*AB D·AB A8LV C<LV F!Cm F%Cm H·LV JµLV G*AB'
                         ],
        xMin           : -5,
        xMax           : 616,
        yMin           : 0,
        yMax           : 714,
        wdth           : 611
      };
      font["W"]        = {
        sC             : [
                           'FHAB DFAB ANLV CLLV ENCµ ERCµ GsLV IsLV K­Cµ K±Cµ M»LV O¹LV L¯AB J±AB HqI© HmI© FHAB'
                         ],
        xMin           : 6,
        xMax           : 938,
        yMin           : 0,
        yMax           : 714,
        wdth           : 944
      };
      font["X"]        = {
        sC             : [
                           'A<AB E6G% A_LV C«LV FLH_ HÁLV K6LV G_G% KXAB I(AB FDEe CZAB A<AB'
                         ],
        xMin           : -3,
        xMax           : 651,
        yMin           : 0,
        yMax           : 714,
        wdth           : 648
      };
      font["Y"]        = {
        sC             : [
                           'GHAB ENAB ENEs A6LV CXLV FRGV IFLV K_LV GHEs GHAB'
                         ],
        xMin           : -6,
        xMax           : 654,
        yMin           : 0,
        yMax           : 714,
        wdth           : 648
      };
      font["Z"]        = {
        sC             : [
                           'H0J¡ B0J¡ B0LV JoLV JoJ» D.B½ J¥B½ J¥AB AqAB AqB± H0J¡'
                         ],
        xMin           : 23,
        xMax           : 608,
        yMin           : 0,
        yMax           : 714,
        wdth           : 630
      };
      font["¡"]        = {
        sC             : [
                           'BRIi D_Ii D_Go BRGo BRIi',
                           'C·FZ DVAm DV>T B]>T B]Am BÁFZ C·FZ'
                         ],
        xMin           : 72,
        xMax           : 206,
        yMin           : -183,
        yMax           : 531,
        wdth           : 278
      };
      font["!"]        = {
        sC             : [
                           'D_AB BRAB BRC< D_C< D_AB',
                           'BÁDP B]I: B]LV DVLV DVI: C·DP BÁDP'
                         ],
        xMin           : 72,
        xMax           : 206,
        yMin           : 0,
        yMax           : 714,
        wdth           : 278
      };
      font["|"]        = {
        sC             : [
                           'C©@Ã B:@Ã B:Ly C©Ly C©@Ã'
                         ],
        xMin           : 60,
        xMax           : 162,
        yMin           : -17,
        yMax           : 731,
        wdth           : 222
      };
      font['"']        = {
        sC             : [
                           'F·H! EHH! EHLV F·LV F·H!',
                           'D4H! BiH! BiLV D4LV D4H!'
                         ],
        xMin           : 83,
        xMax           : 361,
        yMin           : 432,
        yMax           : 714,
        wdth           : 444
      };
      font["'"]        = {
        sC             : [
                           'D>H! BsH! BsLV D>LV D>H!'
                         ],
        xMin           : 88,
        xMax           : 190,
        yMin           : 432,
        yMax           : 714,
        wdth           : 278
      };
      font["#"]        = {
        sC             : [
                           'GwE} HÃE} HÃDg GcDg G%AB E©AB F@Dg DeDg D(AB B«AB CBDg A©Dg A©E} CXE} C}G£ B@G£ B@H¹ C³H¹ DJL: EmL: E0H¹ F±H¹ GHL: HkL: H.H¹ IZH¹ IZG£ G½G£ GwE}'
                         ],
        hC             : [
                           ['FVE} F{G£ D¿G£ DyE} FVE}']
                         ],
        xMin           : 34,
        xMax           : 524,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["$"]        = {
        sC             : [
                           'AeDu CHDu CDB]EHBT EHF8 CwFsB·G> A¥H,A¥Iq A¥K%B¯K· C¯LyEHLy EHM· EÁM· EÁLy G]LyHTK» ITK0ITIs GqIs GgKDEÁKD EÁGÁ G¡GcHgF· IyF%IyDc IyB¯HoA¹ GsA*EÁ@Ã EÁ?§ EH?§ EH@Ã CkA#BgAÂ AcB½AeDu'
                         ],
        hC             : [
                           ['EÁF% EÁBT G·BgG·DB G·E(GHEa FµE«EÁF%','EHH4 EHKD CgKDCgI£ CgHmEHH4']
                         ],
        xMin           : 17,
        xMax           : 539,
        yMin           : -95,
        yMax           : 809,
        wdth           : 556
      };
      font["%"]        = {
        sC             : [
                           'E4F: C«F:C2G0 BgG¹BgIH BgJwC6Ka C±LVE4LV FZLVG2Ka G¥JwG¥IH G¥G¹G6G0 FaF:E4F:',
                           'LÃA% KuA%JÁA¿ JRB¥JRD4 JREcK!FL K{GBLÃGB NFGBNÁFL OoEcOoD4 OoB¥O!A¿ NLA%LÃA%',
                           'Fg@µ EJ@µ KTLk LmLk Fg@µ'
                         ],
        hC             : [
                           ['C½IH C½G<E2G< FNG<FNIH FNKTE2KT C½KTC½IH'],
                           ['K©D4 K©B(LÁB( N:B(N:D4 N:F@LÁF@ K©F@K©D4'],
                           []
                         ],
        xMin           : 82,
        xMax           : 918,
        yMin           : -24,
        yMax           : 724,
        wdth           : 1000
      };
      font["&"]        = {
        sC             : [
                           'KoAB IVAB HTBc G:A%EDA% C}A%B¢Aº A¥B«A¥DN A¥FDDJGm C:I!C:J# C:K<CÂK½ D§LyE»Ly G,LyG³L! H}KDH}J! H}HBF{G8 HXE, HyE©H§Fm JLFm J4D»I]C± KoAB'
                         ],
        hC             : [
                           ['GZC{ EBFV D<E§D4E} CgE8CgDJ CgCZD%B½ DgBZELBZ F8BZF£B· FÃC,GZC{','EÁKN E_KNE2K! D©JwD©J0 D©IuE4I0 E_H{E«HB FZH{F}I! G0I_G0J* G0JsF«JÃ FaKNEÁKN']
                         ],
        xMin           : 32,
        xMax           : 662,
        yMin           : -14,
        yMax           : 731,
        wdth           : 648
      };
      font["{"]        = {
        sC             : [
                           'A:D§ A:F8 AyF8B.FV BwF¡BwGJ BwJg BwKeCVL6 D#LyDwLy F,Ly F,KD E>KD DNKDDNJ8 DNG2 DNFHC¡E³ CHEkB¡Ea B¡E] DNEHDNC¡ DN@§ DN?yE>?y F,?y F,>D Dw>D D#>DCV>© Bw?XBw@V BwCc BwD8B.De AyD§A:D§'
                         ],
        xMin           : -4,
        xMax           : 309,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["}"]        = {
        sC             : [
                           'E½F8 E½D§ E]D§E(Dg D_D>D_Cs D_@V D_?XC¡>© C0>DB_>D A(>D A(?y A¹?y B©?yB©@§ B©C­ B©DuCVE, C¯ERDVE] DVEa B©EuB©G> B©J8 B©KDA¹KD A(KD A(Ly B_Ly C0LyC¡L6 D_KeD_Jg D_GZ D_F§E(FX E]F8E½F8'
                         ],
        xMin           : -13,
        xMax           : 300,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["("]        = {
        sC             : [
                           'E¡>D DD>D B#A±B#E_ B#I<DDLy E¡Ly C«I@C«E_ C«AeE¡>D'
                         ],
        xMin           : 49,
        xMax           : 286,
        yMin           : -191,
        yMax           : 731,
        wdth           : 278
      };
      font[")"]        = {
        sC             : [
                           'A2Ly BmLy D¯I,D¯E] D¯A}Bm>D A2>D C(AyC(E] C(IVA2Ly'
                         ],
        xMin           : -8,
        xMax           : 229,
        yMin           : -191,
        yMax           : 731,
        wdth           : 278
      };
      font["*"]        = {
        sC             : [
                           'B:H2 CFIo AiJ: A·K< CqJg CqLV DyLV DyJg FRK< F¥J: DÁIo F*H2 E@Ge D2I( C*Ge B:H2'
                         ],
        xMin           : 19,
        xMax           : 352,
        yMin           : 401,
        yMax           : 714,
        wdth           : 370
      };
      font["+"]        = {
        sC             : [
                           'B!F! E4F! E4I6 F£I6 F£F! IµF! IµDV F£DV F£AB E4AB E4DV B!DV B!F!'
                         ],
        xMin           : 48,
        xMax           : 552,
        yMin           : 0,
        yMax           : 506,
        wdth           : 600
      };
      font[","]        = {
        sC             : [
                           'CVAB BLAB BLCP DcCP DcAB Dc@HCº?t CL>ÁBT>© BT?£ B·?³C6@G CX@¡CVAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : -158,
        yMax           : 135,
        wdth           : 278
      };
      font["-"]        = {
        sC             : [
                           'FkDw B#Dw B#FN FkFN FkDw'
                         ],
        xMin           : 49,
        xMax           : 340,
        yMin           : 218,
        yMax           : 326,
        wdth           : 389
      };
      font["."]        = {
        sC             : [
                           'DcAB BLAB BLCP DcCP DcAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : 0,
        yMax           : 135,
        wdth           : 278
      };
      font["/"]        = {
        sC             : [
                           'Bq@Ã @¹@Ã ETLy G.Ly Bq@Ã'
                         ],
        xMin           : -22,
        xMax           : 374,
        yMin           : -17,
        yMax           : 731,
        wdth           : 352
      };
      font[":"]        = {
        sC             : [
                           'DcAB BLAB BLCP DcCP DcAB',
                           'DcG( BLG( BLI6 DcI6 DcG('
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : 0,
        yMax           : 506,
        wdth           : 278
      };
      font[";"]        = {
        sC             : [
                           'DcG( BLG( BLI6 DcI6 DcG(',
                           'CVAB BLAB BLCP DcCP DcAB Dc@HCº?t CL>ÁBT>© BT?£ B·?³C6@G CX@¡CVAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : -158,
        yMax           : 506,
        wdth           : 278
      };
      font["<"]        = {
        sC             : [
                           'D*E< I¹B¡ I¹A2 AÁDu AÁE§ I¹IF I¹G{ D*E<'
                         ],
        xMin           : 46,
        xMax           : 554,
        yMin           : -8,
        yMax           : 514,
        wdth           : 600
      };
      font["="]        = {
        sC             : [
                           'B!DX IµDX IµB¯ B!B¯ B!DX',
                           'B!Gm IµGm IµEÃ B!EÃ B!Gm'
                         ],
        xMin           : 48,
        xMax           : 552,
        yMin           : 101,
        yMax           : 405,
        wdth           : 600
      };
      font[">"]        = {
        sC             : [
                           'AÁA2 AÁB¡ G­E< AÁG{ AÁIF I¹E§ I¹Du AÁA2'
                         ],
        xMin           : 46,
        xMax           : 554,
        yMin           : -8,
        yMax           : 514,
        wdth           : 600
      };
      font["¿"]        = {
        sC             : [
                           'DgGo DgIi FsIi FsGo DgGo',
                           'GTA³ I8A³ I:@:H7?6 G4>2EX>2 C¿>2BÃ>¿ B#?©B#A< B#B8B]B¯ B{C<CWC­ D4DXDRD­ D§EXD§FZ F]FZ F]E4F6DZ E¹C±E@CD DcBsDNBZ CÁA¿CÁAD CÁ@_Dg?Ã DÁ?qEc?q FZ?qFº@> GT@¯GTA³'
                         ],
        xMin           : 49,
        xMax           : 507,
        yMin           : -200,
        yMax           : 531,
        wdth           : 556
      };
      font["?"]        = {
        sC             : [
                           'FoAB DcAB DcC< FoC< FoAB',
                           'C«H³ B#H³ B!JoC$Kt D(LyE§Ly GBLyH=K¯ I8JÃI8Ie I8HiH£G· HcGeG«F» G(FHF­E¹ FXEHFXDF D£DF D£EmE%FF EFFµE¿G] F{H.F±HF G>H§G>I] G>JJFyJ« F>K:E{K: C«K:C«H³'
                         ],
        xMin           : 49,
        xMax           : 507,
        yMin           : 0,
        yMax           : 731,
        wdth           : 556
      };
      font["@"]        = {
        sC      : [
                           'I§I¡ J³I¡ I£Eq IqE2IqD¹ IqDgI·Dg JuDgKDEc K»FgK»G¹ K»IqJ{Jw IeKwG¥Kw E©KwDfJI CDH¿CDFÁ CDD¡DoCN EµB!G·B! J*B!KVCi LcCi K¥BNJdAx ID@ÃG¯@Ã ER@ÃC¡By B#DTB#G% B#IRC~K$ EVLyG¥Ly I·LyKVKT LÃJ*LÃH. LÃEÁKqDo J_CZIHCZ HXCZHRDN HNDN GiC]FoC] EsC]DÁD8 DJD·DJE¹ DJG_EBHy FDI¿G£I¿ H½I¿IaH¯ I§I¡'
                         ],
        hC       : [
                           ['F·Ds G§DsHXEo I%F_I%GV I%G¿HxHQ HHH©G«H© F·H©F@G³ EuG#EuF( EuEXEÃE$ FLDsF·Ds']
                         ],
        xMin           : 49,
        xMax           : 751,
        yMin           : -17,
        yMax           : 731,
        wdth           : 800
      };
      font["["]        = {
        sC      : [
                           'E³>D BR>D BRLy E³Ly E³KD D*KD D*?y E³?y E³>D'
                         ],
        xMin           : 72,
        xMax           : 295,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["]"]        = {
        sC      : [
                           'ADLy D¥Ly D¥>D AD>D AD?y C*?y C*KD ADKD ADLy'
                         ],
        xMin           : 1,
        xMax           : 224,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["^"]        = {
        sC      : [
                           'E½JN D6Fa BkFa ERL: FcL: IJFa G¡Fa E½JN'
                         ],
        xMin           : 84,
        xMax           : 516,
        yMin           : 335,
        yMax           : 700,
        wdth           : 600
      };
      font["_"]        = {
        sC      : [
                           'I*@, I*?H AB?H AB@, I*@,'
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 500
      };
      font[" "]        = {
        sC      : [
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 278
      };
      font[" "]        = {
        sC      : [
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 278
      };

      return font;


      function supplement(basis,extra,offsetX,offsetY){
        var glyph      = {
              xMin     : basis.xMin,
              xMax     : basis.xMax,
              yMin     : basis.yMin,
              yMax     : basis.yMax,
              wdth     : basis.wdth
            },
            shapes     = basis.sC.map(shape=>shape),
            holes      = typeof basis.hC === "object" ? basis.hC.map(hole=>hole) : undefined ,
            extraShapes= extra === "dieresis" ? 2 : 1 , 
            extraHoles = extra === "ring" ? 1 : 0 ;

        if ( extraShapes === 2 ) {
          if ( holes ) { holes.unshift([]) }
          if ( extra === "dieresis" ) { shapes.unshift(dieresisRightCoded(offsetX,offsetY)) }
        }
        if ( extraHoles ) {
          if ( typeof holes !== "object" ) {
            holes      = basis.sC.map(shape=>[])
          }
          if ( extra === "ring" ) {
            holes.unshift(ringHoleCoded(offsetX,offsetY)) 
          }
        } else {
          if ( holes ) { holes.unshift([]) }
        }

        if ( extra === "dieresis" )   { 
          glyph.yMax   = dieresisYmax(offsetY);
          shapes.unshift(dieresisLeftCoded(offsetX,offsetY))
        }
        if ( extra === "circumflex" ) {
          glyph.yMax   = circumflexYmax(offsetY);
          shapes.unshift(circumflexCoded(offsetX,offsetY)) 
        }
        if ( extra === "acute" )      { 
          glyph.yMax   = acuteYmax(offsetY);
          shapes.unshift(acuteCoded(offsetX,offsetY)) 
        }
        if ( extra === "grave" )      { 
          glyph.yMax   = graveYmax(offsetY);
          shapes.unshift(graveCoded(offsetX,offsetY)) 
        }
        if ( extra === "tilde" )      { 
          glyph.yMax   = tildeYmax(offsetY);
          shapes.unshift(tildeCoded(offsetX,offsetY))
        }
        if ( extra === "ring" )       { 
          glyph.yMax   = ringYmax(offsetY);
          shapes.unshift(ringCoded(offsetX,offsetY))
        }
        glyph.sC       = shapes;
        if ( holes ) {
          glyph.hC     = holes
        }
        return glyph     
      };

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
      // To support non-english letters, we need a variety of new symbols: acute, dieresis, etc.
      // It turns out that these symbols can be re-used, with some placement changes
      // To save space and code, that's what we do
      // These functions return the special symbols in compressed or raw forms
      function acuteRaw(dx,dy){
        return [[128+dx,588+dy],[45+dx,588+dy],[135+dx,731+dy],[270+dx,731+dy]]
      };
      function acuteCoded(dx,dy){
        return codeList(acuteRaw(dx,dy))
      };
      function acuteYmax(y){return 731+y};

      function graveRaw(dx,dy){
        return [[113+dx,588+dy],[-29+dx,731+dy],[105+dx,731+dy],[196+dx,588+dy]]
      };
      function graveCoded(dx,dy){
        return codeList(graveRaw(dx,dy))
      };
      function graveYmax(y){return 731+y};

      function circumflexRaw(dx,dy){
        return [[120+dx,678+dy],[50+dx,588+dy],[-42+dx,588+dy],[65+dx,731+dy],[176+dx,731+dy],[284+dx,588+dy],[191+dx,588+dy]]
      };
      function circumflexCoded(dx,dy){
        return codeList(circumflexRaw(dx,dy))
      };
      function circumflexYmax(y){return 731+y};

      function caronRaw(dx,dy){
        return [[284+dx,731+dy],[176+dx,588+dy],[65+dx,588+dy],[-42+dx,731+dy],[50+dx,731+dy],[120+dx,642+dy],[191+dx,731+dy]]
      };
      function caronCoded(dx,dy){
        return codeList(caronRaw(dx,dy))
      };
      function caronYmax(y){return 731+y};

      function dieresisLeftRaw(dx,dy){
        return [[92+dx,599+dy],[-22+dx,599+dy],[-22+dx,707+dy],[92+dx,707+dy]]
      };
      function dieresisLeftCoded(dx,dy){
        return codeList(dieresisLeftRaw(dx,dy))
      };
      function dieresisRightRaw(dx,dy){
        return [[150+dx,707+dy],[264+dx,707+dy],[264+dx,599+dy],[150+dx,599+dy]]
      };
      function dieresisRightCoded(dx,dy){
        return codeList(dieresisRightRaw(dx,dy))
      };
      function dieresisYmax(y){return 707+y};

      function tildeRaw(dx,dy){
        return [[297+dx,714+dy],[279+dx,599+dy,186+dx,599+dy],[163+dx,599+dy,113.5+dx,617.5+dy],[64+dx,636+dy,43+dx,636+dy],[26+dx,636+dy,13.5+dx,623+dy],[1+dx,610+dy,1+dx,595+dy],[-56+dx,595+dy],[-49+dx,639+dy,-24+dx,671+dy],[6+dx,708+dy,48+dx,708+dy],[81+dx,708+dy,127.5+dx,689+dy],[174+dx,670+dy,191+dx,670+dy],[229+dx,670+dy,241+dx,714+dy]]
      };
      function tildeCoded(dx,dy){
        return codeList(tildeRaw(dx,dy))
      };
      function tildeYmax(y){return 714+y};

      function ringHoleRaw(dx,dy){
        return [[
          [60+dx,652+dy],[60+dx,628+dy,78.5+dx,609.5+dy],[97+dx,591+dy,121+dx,591+dy],[146+dx,591+dy,164+dx,609.5+dy],[182+dx,628+dy,182+dx,652+dy],[182+dx,677+dy,164+dx,695+dy],[146+dx,713+dy,121+dx,713+dy],[97+dx,713+dy,78.5+dx,695+dy],[60+dx,677+dy,60+dx,652+dy]
        ]]
      };
      function ringHoleCoded(dx,dy){
        return [codeList(ringHoleRaw(dx,dy)[0])]
      };
      function ringRaw(dx,dy){
        return [[121+dx,549+dy],[80+dx,549+dy,49+dx,580+dy],[18+dx,611+dy,18+dx,652+dy],[18+dx,694+dy,49+dx,724.5+dy],[80+dx,755+dy,121+dx,755+dy],[163+dx,755+dy,193.5+dx,724.5+dy],[224+dx,694+dy,224+dx,652+dy],[224+dx,611+dy,193.5+dx,580+dy],[163+dx,549+dy,121+dx,549+dy]]
      };
      function ringCoded(dx,dy){
        return codeList(ringRaw(dx,dy))
      };
      function ringYmax(y){return 755+y};


      function dotlessiRaw(){
        return [[177,517],[177,0],[63,0],[63,517]]
      };
      function dotlessiCoded(){
        return codeList(dotlessiRaw())
      };
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
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
/* 5 */
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