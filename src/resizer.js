/**
 * Created by huangjin02 on 13-11-29.
 */
/* globa define */
define(['meta'], function(META) {

  var ResizeOptions = {
    maxWidth: 800,
    maxHeight: 600,
    quality: 0.8,
    type: 'jpeg'
  };

  var ResizeResult = {
    src: '',    // DataURL，对 Retina 做了 High DPI 处理，用于放在 img/background 中输出
    width: '',  // 输出用的宽度，和 src 里图片的宽度不一致，因为 Retina
    height: '', // 输出用的高度，和 src 里图片的高度不一致，因为 Retina
    name: '',   // 文件名
    data: ''    // DataURL，未针对 Retina 做 High DPI 处理的原始数据，输出到后端时，应用这个。
  };

  /**
   *
   * @param {Blob} file
   * @param {ResizeOptions} options
   * @param {function} callback
   */
  var resize = function resize(file, options, callback) {



  };

  return resize;
});