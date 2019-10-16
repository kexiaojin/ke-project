// components/sharemodal/share.js
var initHeight = 700;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shareData: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialog: false,
    sharePath: '',
    posterPath: '',
    posterHeight: 4000
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onshow: function(){
      this.setData({
        "showDialog": !this.data.showDialog
      })
    },
    getTempFile: function(){
      var that = this;
      wx.canvasToTempFilePath({
        canvasId: 'shareCanvas',
        success: function(res) {
          wx.hideLoading()
          that.setData({
            "sharePath": res.tempFilePath
          },()=>{
            wx.previewImage({
              urls: [res.tempFilePath]
            })
          })
          
        }
      },this)
    },
    getPosterTempFile: function(){
      var that = this;
      initHeight = 700;
      wx.canvasToTempFilePath({
        canvasId: 'posterCanvas',
        success: function(res) {
          wx.hideLoading()
          that.setData({
            "posterPath": res.tempFilePath
          },()=>{
            wx.previewImage({
              urls: [res.tempFilePath]
            })
          })
          
        }
      },this)
    },
    getImage: function(){
      var that = this;
      var shareData = that.data.shareData;
      if(that.data.sharePath){
        wx.previewImage({
          urls: [that.data.sharePath]
        })
      }else{
        wx.showLoading()

        var ctx = wx.createCanvasContext('shareCanvas',this);
        var grd = ctx.createLinearGradient(0, 0, 0, 680);

        grd.addColorStop(0, '#e69422')
        grd.addColorStop(1, '#e2891d')
        ctx.save()
        ctx.setFillStyle('#fff')
        ctx.fillRect(0, 0, 750, 1334)
        ctx.setFillStyle(grd)
        ctx.fillRect(0, 0, 750, 540)
        ctx.moveTo(0, 540)
        ctx.quadraticCurveTo(375, 680, 750, 540)
        ctx.fill()
        ctx.closePath()

        ctx.setFillStyle('#e2891d')

        ctx.beginPath()
        ctx.arc(80, 80, 20, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(670, 80, 120, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(40, 300, 80, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(240, 120, 10, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(550, 300, 20, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(375, 410, 60, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.setStrokeStyle('#fff')
        ctx.setLineWidth(8)
        ctx.arc(375, 210, 100, 0, Math.PI * 2)
        ctx.setShadow(0, 0, 20, '#e69422')
        ctx.stroke()
        ctx.arc(375, 210, 100, 0, Math.PI * 2)
        ctx.clip()
        ctx.drawImage(shareData.iconFile, 275, 110, 200, 200)
        ctx.closePath()

        ctx.restore()
        ctx.setFillStyle("#fff")
        ctx.setTextAlign('center')
        ctx.setFontSize(50)
        ctx.fillText(shareData.realName,375,410)
        ctx.setFontSize(28)
        ctx.fillText(shareData.companyName,375,460)

        ctx.beginPath()
        ctx.moveTo(375,576)
        ctx.lineTo(380,580)
        ctx.lineTo(370,580)
        ctx.lineTo(375,576)
        ctx.closePath();
        ctx.stroke()

        ctx.setFontSize(44)
        var metrics = ctx.measureText('我正在急聘君寻找您！Join Us');
        var gapWidth = (750-metrics.width)/2;
        ctx.setLineWidth(100)
        ctx.setStrokeStyle('#444')
        ctx.setLineCap('round')
        ctx.moveTo(gapWidth, 580)
        ctx.lineTo(750-gapWidth, 580)
        ctx.stroke()
        ctx.fillText('我正在急聘君寻找您！Join Us',375,600)

        ctx.setFillStyle("#000")
        ctx.setFontSize(44)
        ctx.fillText(shareData.positionName,375,760)
        ctx.setFillStyle("#e69422")
        ctx.fillText('￥'+shareData.salaryCNName,375,836)
        ctx.setFillStyle("#999")
        ctx.setFontSize(28)
        ctx.fillText(shareData.addressPost+'  |  '+shareData.personsNum+'人  |  '+shareData.needDegreeCNName+'  |  '+shareData.workYears,375,900)
        ctx.drawImage(shareData.qrCode, 275, 1000, 200, 200)
        ctx.fillText('（长按识别二维码了解详情）',375,1260)

        ctx.draw(false,function(){
          setTimeout(function(){
            that.getTempFile();
          },200)
        })
      }
    },
    textBrFix: function(content){
      var reg=new RegExp("<br/>","g");
      return content.replace(reg,"\r\n");
    },
    drawText: function(content,str,canvasWidth){
      var lineWidth = 0;
      var lastSubStrIndex = 0;
      var textArray = str.split('<br/>');
      for (let j = 0; j < textArray.length; j++) {
        lineWidth = 0;
        initHeight += 48;
        for (let i = 0; i < textArray[j].length; i++) {
          lineWidth += content.measureText(textArray[j][i]).width;
          if (lineWidth > canvasWidth) {
            content.fillText(textArray[j].substring(lastSubStrIndex, i), 40, initHeight);
            initHeight += 48;
            lineWidth = 0;
            lastSubStrIndex = i;
          }
          if (i == textArray[j].length-1) {
            content.fillText(textArray[j].substring(lastSubStrIndex, i+1), 40, initHeight);
          }
        }
      }
    },
    getPoster: function(){
      var that = this;
      var posterData = that.data.shareData;
      if(that.data.posterPath){
        wx.previewImage({
          urls: [that.data.posterPath]
        })
      }else{
        wx.showLoading()
        
        var ctx = wx.createCanvasContext('posterCanvas',this);

        
        ctx.setFillStyle("#fff")
        ctx.fillRect(0, 0, 750, 4000)
        ctx.drawImage('/images/share-pic2.png', 0, 0, 750, 200)
        ctx.save()
        
        ctx.beginPath()
        ctx.setStrokeStyle('#fff')
        ctx.setLineWidth(8)
        ctx.arc(90, 200, 50, 0, Math.PI * 2)
        ctx.stroke()
        ctx.arc(90, 200, 50, 0, Math.PI * 2)
        ctx.clip();
        ctx.drawImage(posterData.iconFile, 40, 150, 100, 100)
        ctx.closePath()

        ctx.restore()
        ctx.setFillStyle("#000")
        ctx.setFontSize(36)
        ctx.fillText(posterData.realName,160,190)
        ctx.setFontSize(28)
        ctx.fillText(posterData.companyName,160,238)

        ctx.setLineWidth(2)
        ctx.setStrokeStyle('#e6e6e6')
        ctx.moveTo(0, 310)
        ctx.lineTo(750, 310)
        ctx.stroke()

        ctx.fillText('正在招聘',40,390)
        ctx.setFontSize(44)
        ctx.fillText(posterData.positionName,40,460)
        ctx.setFontSize(28)
        ctx.setFillStyle("#e69422")
        var metrics = ctx.measureText('￥'+posterData.salaryCNName);
        ctx.fillText('￥'+posterData.salaryCNName,40,520)
        ctx.setFillStyle("#999")
        ctx.fillText('  |  '+posterData.addressPost+'  |  '+posterData.personsNum+'人  |  '+posterData.needDegreeCNName+'  |  '+posterData.workYears,metrics.width+40,520)
        
        ctx.setLineWidth(2)
        ctx.setStrokeStyle('#e6e6e6')
        ctx.moveTo(0, 580)
        ctx.lineTo(750, 580)
        ctx.stroke()

        ctx.setFillStyle("#000")
        ctx.setFontSize(36)
        ctx.fillText('职位详情',40,660)
        ctx.setFontSize(28)
        this.drawText(ctx, posterData.positionDesc, 660);

        ctx.drawImage(posterData.qrCode, 40, initHeight+120, 200, 200)
        ctx.setFontSize(36)
        ctx.fillText('我正在急聘君寻找您！',270,initHeight+210)
        ctx.setFontSize(28)
        ctx.setFillStyle("#999")
        ctx.fillText('（长按识别二维码了解详情）',254,initHeight+260)

        ctx.drawImage('/images/share-pic3.png', 0, initHeight+400, 750, 100)
        
        that.setData({
          "posterHeight": initHeight+500
        })
        ctx.draw(false,function(){
          setTimeout(function(){
            that.getPosterTempFile();
          },200)
        })
      }
    }
  }
})
