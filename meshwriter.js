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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (HPB, HNM, CSN, JUR, WGD) {
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
    csn,
    jur,
    wgd,
    debug;
  var b128back, b128digits;
  var earcut = __webpack_require__(3);
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
  csn = CSN(codeList);
  jur = JUR(codeList);
  wgd = WGD(codeList);
  // >>>>>  STEP 2 <<<<<
  FONTS = {};
  // >>>>>  STEP 3 <<<<<
  FONTS["yahei"] = hpb;
  // FONTS["HelveticaNeue-Medium"]= hnm;                                   // Do not remove
  // FONTS["Helvetica"]           = hnm;
  // FONTS["Arial"]               = hnm;
  // FONTS["sans-serif"]          = hnm;
  // FONTS["Comic"]               = csn;
  // FONTS["comic"]               = csn;
  // FONTS["ComicSans"]           = csn;
  // FONTS["Jura"]                = jur;
  // FONTS["jura"]                = jur;
  // FONTS["WebGL-Dings"]         = wgd;
  // FONTS["Web-dings"]           = wgd;
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
/* 3 */
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