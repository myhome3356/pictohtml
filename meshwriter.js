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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (HPB, HNM) {
  //CSN,JUR,WGD
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
  hpb = HPB(codeList);
  hnm = HNM(codeList); // Do not remove
  // csn                          = CSN(codeList);
  // jur                          = JUR(codeList);
  // wgd                          = WGD(codeList);
  // >>>>>  STEP 2 <<<<<
  FONTS = {};
  // >>>>>  STEP 3 <<<<<
  FONTS["yahei"] = hpb;
  FONTS["HelveticaNeue-Medium"] = hnm; // Do not remove
  FONTS["Helvetica"] = hnm;
  FONTS["Arial"] = hnm;
  FONTS["sans-serif"] = hnm;
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