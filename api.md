# 用户系统接口设计

* [版本说明](api.md#version)

* [一、行政区域查询](#hotel-city-district)
  * [1.1 请求](#hotel-city-district-request)
  * [1.2 响应](#hotel-city-district-response)
  * [1.3 示例](#hotel-city-district-example) 

* [二、酒店关键词查询](#hotel-bykeywords)
  * [1.1 请求](#hotel-keywords-request)
  * [1.2 响应](#hotel-keywords-response)
  * [1.3 示例](#hotel-keywords-example) 

* [三、酒店列表静态数据查询](#hotel-list)
  * [1.1 请求](#hotel-list-request)
  * [1.2 响应](#hotel-list-response)
  * [1.3 示例](#hotel-list-example) 

* [四、酒店静态数据查询](#hotel-byhotelCode)
  * [1.1 请求](#hotel-byhotelCode-request)
  * [1.2 响应](#hotel-byhotelCode-response)
  * [1.3 示例](#hotel-byhotelCode-example) 
  
* [五、酒店房型销售计划查询](#hotel-roomRatePlan)
  * [1.1 请求](#hotel-roomRatePlan-request)
  * [1.2 响应](#hotel-roomRatePlan-response)
  * [1.3 示例](#hotel-roomRatePland-example) 
  
* [六、酒店静态房型数据查询](#hotel-roomInfo)
  * [1.1 请求](#hotel-roomInfo-request)
  * [1.2 响应](#hotel-roomInfo-response)
  * [1.3 示例](#hotel-roomInfo-example) 

* [七、酒店价格计划查询](#hotel-ratePlan)
  * [1.1 请求](#hotel-ratePlan-request)
  * [1.2 响应](#hotel-ratePlan-response)
  * [1.3 示例](#hotel-ratePlan-example) 

* [八、酒店价格计划验证](#hotel-ratePlan-validate)
  * [1.1 请求](#hotel-ratePlan-validate-request)
  * [1.2 响应](#hotel-ratePlan-validate-response)
  * [1.3 示例](#hotel-ratePlan-validate-example) 

* [九、担保规则计算](#hotel-ratePlan-guaranteeRule)
  * [1.1 请求](#hotel-ratePlan-guaranteeRule-request)
  * [1.2 响应](#hotel-ratePlan-guaranteeRule-response)
  * [1.3 示例](#hotel-ratePlan-guaranteeRule-example) 
  
* [十、城市查询](#hotel-city)
  * [1.1 请求](#hotel-city-request)
  * [1.2 响应](#hotel-city-response)
  * [1.3 示例](#hotel-city-example) 

* [一、创建订单](#hotel-create.order)
  * [1.1 请求](#hotel-create.order-request)
  * [1.2 响应](#hotel-create.order-response)
  * [1.3 示例](#hotel-create.order-example) 

* [二、订单列表查询](#order-list)
  * [1.1 请求](#order-list-request)
  * [1.2 响应](#order-list-response)
  * [1.3 示例](#order-list-example)

* [三、订单详情查询](#order-detail)
  * [1.1 请求](#order-detail-request)
  * [1.2 响应](#order-detail-response)
  * [1.3 示例](#order-detail-example)

* [四、取消订单](#order-cancel)
  * [1.1 请求](#order-cancel-request)
  * [1.2 响应](#order-cancel-response)
  * [1.3 示例](#order-cancel-example)

* [五、支付订单](#order-pay)
  * [1.1 请求](#order-pay-request)
  * [1.2 响应](#order-pay-response)
  * [1.3 示例](#order-pay-example)

* [六、信用卡验证](#creditcard)
  * [1.1 请求](#creditcard-request)
  * [1.2 响应](#creditcard-response)
  * [1.3 示例](#creditcard-example) 

* [七、国际酒店姓名验证](#checkName)
  * [1.1 请求](#checkName-request)
  * [1.2 响应](#checkName-response)
  * [1.3 示例](#checkName-example)

  
* [八、支付方式验证](#paymentMethod)
  * [1.1 请求](#paymentMethod-request)
  * [1.2 响应](#paymentMethod-response)
  * [1.3 示例](#paymentMethod-example)
* [九、下单数据验证](#dataValidate)
  * [1.1 请求](#dataValidate-request)
  * [1.2 响应](#dataValidate-response)
  * [1.3 示例](#dataValidate-example)

* [字典](#dict)
  * [1.1 starRate](#dict-starRate)
  * [1.2 category](#dict-category)
  * [1.3 facilities](#dict-facilities)<待补充>
  * [1.4 currencyCode](#dict-currencyCode)
  * [1.5 paymentType](#dict-paymentType)
  * [1.6 guaranteeType](#dict-guaranteeType)
  * [1.7 customerType](#dict-customerType)
  * [1.8 idType](#dict-idType)
  * [1.9 bookRuleType](#dict-bookRuleType)
  * [1.10 localState](#dict-localState)
  * [1.11 changeType](#dict-changeType)
  * [1.12 cancelCode](#dict-cancelCode)
  * [1.13 markType](#dict-markType)
  * [1.14 sort](#dict-sort)
  * [1.15 purPayType](#dict-purPayType) 
  * [1.16 source](#dict-source)
  * [1.17 customerGender](#dict-customerGender) 
  * [1.18 state](#dict-state)
  * [1.19 refundState](#dict-refundState)
    
## <a id="version"></a> 版本说明

版本号|发布时间|作者|版本说明|
---|---|---|---|
v2.0|2016/12/20|朱剑锋|初稿|

## <a id="hotel-city-district"></a> 一、行政区域查询
#### 描述
* 1. 按照城市 code，查询城市下面所有的行政区

### <a id="hotel-city-district-request"></a> 1.1 请求
#### url
```javascript
GET /api/luopan-hotel-engine/city/{cityCode}/districts
```

#### 输入参数
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|cityCode|String|城市编号||

### <a id="hotel-city-district-response"></a> 1.2 响应
#### 根节点
-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功||
-|results|结果集|包含多个[city](#hotel-city.info)节点|
-|msg|信息提示||

#### <a id="hotel-city.info"></a> city 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|id|Number|id||
-|createTime|Number|创建时间||
-|updateTime|Number|更新时间||
-|districtCode|String|城市编号||
-|districtPcode|String|父级行政区编号||
-|districtName|String|城市名字||
-|districtLevel|String|行政区等级||
-|districts|Array|行政区数组[district](#hotel-city-district-info)||

#### <a id="hotel-city-district-info"></a> district 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|id|Number|id||
-|createTime|Number|创建时间||
-|updateTime|Number|更新时间||
-|districtCode|String|行政区编号||
-|districtPcode|String|父级行政区编号||
-|districtName|String|行政区名字||

### <a id="hotel-city-district-example"></a> 1.3 示例
#### 输入参数
```javascript
{
	"cityCode":"320500"
}
```

#### 返回结果
```javascript
{
    "success": true,
    "msg": "获取城市成功",
    "results": {
        "id": 924,
        "createTime": 1481731200000,
        "updateTime": 1481731200000,
        "districtCode": "320500",
        "districtPcode": "320000",
        "districtName": "苏州市",
        "districtLevel": "2",
        "districts": [
            {
                "id": 925,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320501",
                "districtPcode": "320500",
                "districtName": "市辖区"
            },
            {
                "id": 926,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320505",
                "districtPcode": "320500",
                "districtName": "虎丘区",
                "districtLevel": "3"
            },
            {
                "id": 927,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320506",
                "districtPcode": "320500",
                "districtName": "吴中区",
                "districtLevel": "3"
            },
            {
                "id": 928,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320507",
                "districtPcode": "320500",
                "districtName": "相城区",
                "districtLevel": "3"
            },
            {
                "id": 929,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320508",
                "districtPcode": "320500",
                "districtName": "姑苏区",
                "districtLevel": "3"
            },
            {
                "id": 930,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320509",
                "districtPcode": "320500",
                "districtName": "吴江区",
                "districtLevel": "3"
            },
            {
                "id": 931,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320581",
                "districtPcode": "320500",
                "districtName": "常熟市"
            },
            {
                "id": 932,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320582",
                "districtPcode": "320500",
                "districtName": "张家港市"
            },
            {
                "id": 933,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320583",
                "districtPcode": "320500",
                "districtName": "昆山市"
            },
            {
                "id": 934,
                "createTime": 1481731200000,
                "updateTime": 1481731200000,
                "districtCode": "320585",
                "districtPcode": "320500",
                "districtName": "太仓市"
            },
            {
                "id": 3515,
                "createTime": 1486596764183,
                "districtCode": "320510",
                "districtPcode": "320500",
                "districtName": "工业园区",
                "districtLevel": "3"
            },
            {
                "id": 3516,
                "createTime": 1486596759479,
                "districtCode": "320511",
                "districtPcode": "320500",
                "districtName": "高新区",
                "districtLevel": "3"
            }
        ]
    }
}
```

## <a id="hotel-bykeywords"></a> 二、酒店关键词查询
#### 描述
* 1. 根据 *酒店名称关键词* 查询酒店（名称及编号）；~~经纬度（用于用经纬度查询酒店列表）~~；

## <a id="hotel-list"></a> 三、酒店（列表）查询
#### 描述

* 1. 根据筛选条件查询可售酒店；
* 2. 支持筛选方式：经纬度，行政区，星级，价格区间；
* 3. 支持排序方式：罗盘推荐排序（自定义排序），价格升序，价格降序，星级降序

#### 流程图
* URL: https://www.processon.com/view/link/585c8cb0e4b03a03b19cbf2b

### <a id="hotel-list-request"></a> 1.1 请求
#### url
```javascript
GET /api/luopan-hotel-engine/hotels
```

#### 输入参数
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|cityCode|String|城市编号||
-|arrivalDate|String|入住日期||
-|departureDate|String|离店日期||
-|highRate|Number|最高价格||
-|lowRate|Number|最低价格||
-|districtCode|String|行政区编码||
-|starRate|String|星级编码||
-|geo|String|经纬度|传酒店编号|
-|limit|Number|每页显示数量||
-|page|Number|页码||
-|sort|String|排序||

### <a id="hotel-list-response"></a> 1.2 响应
#### 根节点
-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功||
-|total|总数||  
-|results|结果集|包含多个[hotel](#hotel-list-info)节点|
-|msg|信息提示||

#### <a id="hotel-list-info"></a> hotel 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|categoryCode|String|推荐星级||
-|districtCode|String|行政区编码||
-|hotelAddress|String|酒店地址||
-|hotelCode|String|酒店编号||
-|hotelName|String|酒店名称||
-|creditCards|String|信用卡||
-|price|Number|酒店最低价||
-|sImage|String|酒店小图||
-|starRateCode|String|酒店星级编号||
-|establishmentDate|String|开业时间||
-|createTime|Number|创建时间||
-|phone|String|电话||
-|reviewCount|Number|评论数||
-|reviewGood|Number|好评数||
-|cityCode|String|城市编号||
-|delete|Boolean|是否删除||
-|minPrice|Number|最低价||

### <a id="hotel-list-example"></a> 1.3 示例
#### 输入参数
```javascript
{
	"cityCode":"320500",
	"arrivalDate":"2017-02-09",
	"departureDate":"2017-02-10",
	"limit":10,
	"page":1
}
```

#### 返回结果
```javascript
{
    "success": true,
    "msg": "酒店列表查询成功",
    "results": [
        {
            "id": 1205960,
            "createTime": 1485143300480,
            "hotelCode": "1001102025",
            "hotelName": "苏州桂林园宾馆",
            "hotelAddress": "苏州姑苏区干将西路西美巷81号(观前街地区(市中心)",
            "categoryCode": "1",
            "phone": "0512-65157888",
            "fax": "0512-65157999",
            "creditCards": "牡丹卡|金穗卡|长城卡|龙卡|太平洋卡|东方卡",
            "establishmentDate": "2004-05",
            "reviewCount": 4390,
            "reviewGood": 3832,
            "cityCode": "320500",
            "starRateCode": "0",
            "deleted": false,
            "minPrice": 149
        },
        {
            "id": 1200374,
            "createTime": 1485141427242,
            "hotelCode": "1001102316",
            "hotelName": "苏州和丰商旅酒店",
            "hotelAddress": "苏州工业园区金鸡湖商业广场5幢(星湖街与苏州大道东路口向南30米,近地铁一号线1出口)",
            "categoryCode": "3",
            "phone": "0512-62969196",
            "fax": "0512-62969195",
            "creditCards": "Visacard|牡丹卡|金穗卡|长城卡|龙卡|太平洋卡|东方卡|万事达卡|运通卡|大莱卡|JCBcard",
            "establishmentDate": "2012-03",
            "reviewCount": 1368,
            "reviewGood": 1250,
            "cityCode": "320500",
            "starRateCode": "0",
            "deleted": false,
            "minPrice": 199
        }
    ］
｝
```

## <a id="hotel-byhotelCode"></a> 四、酒店静态数据查询

#### 描述
* 1. 根据酒店 code 查询酒店静态信息（详情页）；

## <a id="hotel-roomRatePlan"></a> 五、酒店房型销售计划查询

#### 描述
* 1. 根据 `酒店 code`、`入离日期`、`价格区间` 查询房型销售计划；（酒店列表页面，详情页）

#### 流程图
* URL: https://www.processon.com/view/link/5861d140e4b078015c9e71c4

### <a id="hotel-roomRatePlan-request"></a> 1.1 请求
#### url
```javascript
GET /api/luopan-hotel-engine/hotels/{hotelCode}/ratePlans
```

#### 输入参数
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|arrivalDate|String|入住日期|'yyyy-MM-dd'|
-|departureDate|String|离店日期|'yyyy-MM-dd'|
-|hotelCode|String|酒店编号||
-|minPrice|Number|最低价||
-|maxPrice|Number|最高价||

### <a id="hotel-roomRatePlan-response"></a> 1.2 响应
#### 根节点
-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功|| 
-|results|结果集|包含多个[hotel](#hotel-info)节点|
-|msg|信息提示||

#### <a id="hotel-info"></a> hotel 节点
-|hotelCode|String|酒店编号||
-|rooms|Array|房型数组|包含多个[room](#room.list-info)节点|

#### <a id="room.list-info"></a> room 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|bedtypeInfo|String|床型||
-|broadnetInfo|String|宽带||
-|lowerPrice|Number|最低价||
-|roomCode|String|房型编号||
-|roomName|String|房型名称||
-|ratePlans|Array|价格计划数组[ratePlan](#ratePlan.list-info)节点||
-|createTime|Number|创建时间||
-|area|String|房型名称||
-|capcity|String|最大入住人数||
-|floor|String|楼层||
-|broadnetInfo|String|网络||
-|bedtypeInfo|String|床型||
-|description|String|描述||
-|hotelCode|String|酒店编号||
-|deleted|Boolean|是否删除||


#### <a id="ratePlan.list-info"></a> ratePlan 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|averagePrice|Number|平均价||
-|breakfastInfo|String|早餐信息||
-|changeRule|Object|取消规则[changeRule](#changeRule.info)节点||
-|currencyCode|String|币种||
-|markType|String|标识[字典](#dict-markType)||
-|nightlyRates|Array|间夜[nightlyRate](#nightlyRaye.list-info)节点||
-|paymentType|String|支付类型[字典](#dict-paymentType)||
-|ratePlanCode|String|销售计划编号||
-|ratePlanName|String|销售计划名称||
-|totalSalePrice|Number|销售总价||
-|hotelId|String|原酒店id||
-|hotelCode|String|酒店编号||
-|roomTypeId|String|原酒店房型id||
-|ratePlanId|String|原酒店销售计划id||
-|roomCode|String|房间编码||
-|paymentType|String|支付类型||
-|bizPartner|String|数据来源||
-|guaranteeAmount|Number|担保金额||
-|customerType|String|客人类型||
-|supId|Number|供应商id||

#### <a id="changeRule.info"></a> changeRule 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|changeType|String|取消类型[字典](#dict-changeType)||
-|changeTime|Number|取消时间|毫秒数|

#### <a id="nightlyRaye.list-info"></a> nightlyRate 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|saleDate|Number|销售日期|秒数|
-|salePrice|Number|销售价||
-|onSale|Boolean|销售状态||

### <a id="hotel-roomRatePland-example"></a> 1.3 示例

#### 输入参数

```javascript
{
	"hotelCode":"1090681198",
	"arrivalDate":"2017-02-08",
	"departureDate":"2017-02-11"
}
```

#### 返回结果

```javascript
{
    "success": true,
    "msg": "房型价格计划查询成功",
    "results": {
        "hotelCode": "1090681198",
        "rooms": [
            {
                "id": 6010267,
                "createTime": 1485139372716,
                "roomCode": "10906811980001",
                "roomName": "大床房",
                "area": "15",
                "capcity": "2",
                "floor": "3",
                "broadnetInfo": "1",
                "bedtypeInfo": "大床1.5米",
                "description": "大床1.5米、3楼、15平米、免费宽带、可入住2人",
                "hotelCode": "1090681198",
                "deleted": false,
                "ratePlans": [
                    {
                        "ratePlanCode": "el-8305579-0001",
                        "hotelId": "90681198",
                        "currencyCode": "CNY",
                        "nightlyRates": [
                            {
                                "saleDate": "2017-02-08",
                                "salePrice": 179,
                                "floorPrice": 179,
                                "onSale": false,
                                "addBedPrice": -1
                            },
                            {
                                "saleDate": "2017-02-09",
                                "salePrice": 179,
                                "floorPrice": 179,
                                "onSale": false,
                                "addBedPrice": -1
                            },
                            {
                                "saleDate": "2017-02-10",
                                "salePrice": 179,
                                "floorPrice": 179,
                                "onSale": false,
                                "addBedPrice": -1
                            }
                        ],
                        "breakfastInfo": "无早餐",
                        "hotelCode": "90681198",
                        "ratePlanName": "不含早",
                        "roomTypeId": "0001",
                        "ratePlanId": "8305579",
                        "roomCode": "10906811980001",
                        "paymentType": "SelfPay",
                        "bizPartner": "1",
                        "guaranteeAmount": 0,
                        "customerType": "All",
                        "supId": 87,
                        "averagePrice": 179
                    }
                ]
            }
         }
      ]
   }
}
```

## <a id="hotel-roomInfo"></a> 六、酒店房型静态数据查询

#### 描述

* 1. 根据 `酒店 code` 和 `房型编号` 查询酒店房型信息；（下单页面）

## <a id="hotel-ratePlan"></a> 七、酒店价格计划查询

#### 描述

* 1. 调用数据源价格计划实时接口，用于获取最新报价；（下单页面）

### <a id="hotel-ratePlan-request"></a> 1.1 请求

#### url

```javascript
GET /api/luopan-hotel-engine/hotels/{hotelCode}/rateplans/{ratePlanCode}
```

#### 输入参数

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|hotelCode|String|酒店编号||
-|ratePlanCode|String|入住日期||
-|arrivalDate|String|入住日期|'yyyy-MM-dd'|
-|departureDate|String|离店日期|'yyyy-MM-dd'|


### <a id="hotel-ratePlan-response"></a> 1.2 响应
#### 根节点
-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功||
-|results|Object|销售计划[ratePlan](#ratePlan.info)节点|
-|msg|信息提示||

#### <a id="ratePlan.info"></a> ratePlan 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|averagePrice|Number|平均价||
-|breakfastInfo|String|早餐信息||
-|changeRule|Object|取消规则[changeRule](#ratePlan.info.changeRule)节点||
-|cityCode|String|城市编码||
-|currencyCode|String|币种||
-|hotelCode|String|酒店编码||
-|hotelId|String|酒店ID||
-|nightlyRates|Array|间夜[nightlyRate](#ratePlan.nightlyRaye.list-info)节点||
-|paymentType|String|支付类型[字典](#dict-paymentType)||
-|ratePlanCode|String|销售计划编号||
-|ratePlanName|String|销售计划名称||
-|roomCode|String|房型编号||
-|roomName|String|房型名称||
-|roomTypeId|String|房型id||
-|totalSalePrice|Number|销售总价||
-|currencyCode|String|币种||
-|ratePlanId|String|原销售计划id||
-|bizPartner|String|数据来源||
-|guaranteeAmount|Number|担保金额||
-|customerType|String|客人类型||
-|supId|String|供应商id||

#### <a id="ratePlan.info.changeRule"></a> changeRule 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|changeTime|Number|取消时间||
-|changeType|String|取消类型||

#### <a id="ratePlan.nightlyRaye.list-info"></a> nightlyRate 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|saleDate|String|销售日期||
-|salePrice|Number|销售价格||
-|onSale|Boolean|是否可售||

### <a id="hotel-ratePlan-example"></a> 1.3 示例

#### 输入参数

```javascript
{
	"hotelCode":"1090681198",
	"ratePlanCode":"el-8305579-0001",
	"arrivalDate":"2017-02-08",
	"departureDate":"2017-02-11"
}
```

#### 返回结果

```javascript
{
    "success": true,
    "msg": "价格计划查询成功",
    "results": {
        "ratePlanCode": "el-8305579-0001",
        "hotelId": "90681198",
        "currencyCode": "CNY",
        "nightlyRates": [
            {
                "saleDate": "2017-02-13",
                "salePrice": 179,
                "onSale": false,
                "addBedPrice": -1
            }
        ],
        "breakfastInfo": "无早餐",
        "hotelCode": "1090681198",
        "ratePlanName": "不含早",
        "roomTypeId": "0001",
        "ratePlanId": "8305579",
        "roomCode": "10906811980001",
        "paymentType": "SelfPay",
        "changeRule": {
            "changeType": "AnyChange"
        },
        "bizPartner": "1",
        "guaranteeAmount": 0,
        "customerType": "All",
        "supId": 87,
        "averagePrice": 179
    }
}
```

## <a id="hotel-ratePlan-validate"></a> 八、酒店价格计划验证

> @朱剑锋: 这个接口时 elong 特有的？如果是建议合并入 [酒店价格计划查询](#hotel-ratePlanInfo) 接口

#### 描述
* 1. 价格计划下单前通过数据源下单前验证接口验证下单价格。

## <a id="hotel-ratePlan-guaranteeRule"></a> 九、担保规则计算
#### 描述
* 1. 修改最晚到店时间后验证是否需要担保

### <a id="hotel-ratePlan-guaranteeRule-request"></a> 1.1 请求
#### url
```javascript
GET /api/luopan-hotel-engine/rateplans/{ratePlanCode}/guarantee-rule
```

#### 输入参数
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|ratePlanCode|String|销售计划编号||
-|arrivalDate|String|到达时间||
-|departureDate|String|离开时间||
-|latestArrivalTime|String|最晚到达时间||
-|roomCount|Number|房间数||

### <a id="hotel-ratePlan-guaranteeRule-response"></a> 1.2 响应
#### 根节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|success|String|是否成功||
-|results|Object|销售计划[ratePlan](#guaranteeRule.ratePlan.info)节点||
-|msg|String|信息提示||

#### <a id="guaranteeRule.ratePlan.info"></a> ratePlan 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|guaranteeAmount|Number|担保金额|
-|guaranteeDescription|String|担保|

### <a id="hotel-ratePlan-guaranteeRule-example"></a> 1.3 示例
#### 输入参数
```javascript
{
	"ratePlanCode":"el-239894-0002",
	"arrivalDate":"2017-02-11",
	"departureDate":"2017-02-12",
	"latestArrivalTime":"2017-02-11 16:00",
	"roomCount":1
}
```

#### 返回结果
```javascript
{
    "success": true,
    "msg": "担保规则计算成功",
    "results": {
        "guaranteeAmount": 0,
        "guaranteeDescription": "无需担保"
    }
}
```

## <a id="hotel-city"></a> 十、城市查询

### <a id="hotel-city-request"></a> 1.1 请求
#### url
```javascript
GET /api/luopan-hotel-engine/citys
```

#### 输入参数
无

### <a id="hotel-city-response"></a> 1.2 响应
#### 根节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|success|String|是否成功||
-|results|String|城市数据|cityName｜cityCode｜pinYin|
-|@cityName|String|城市名称||
-|@cityCode|String|城市编码||
-|@pinYin|String|拼音||
-|msg|String|信息提示||

### <a id="hotel-city-example"></a> 1.3 示例
#### 输入参数
```javascript
无
```

#### 返回结果
```javascript
{
    "success": true,
    "msg": "获取城市成功",
    "results": "宣化县|130721|xuan,hua,xian;张北县|130722|zhang,bei,xian;康保县|130723|kang,bao,xian;沽源县|130724|gu,yuan,xian;尚义县|130725|shang,yi,xian;蔚县|130726|yu,xian;阳原县|130727|yang,yuan,xian;怀安县|130728|huai,an,xian;万全县|130729|wan,quan,xian;怀来县|130730|huai,lai,xian;涿鹿县|130731|zhuo,lu,xian;赤城县|130732|chi,cheng,xian;崇礼县|130733|chong,li,xian;兴隆县|130822|xing,long,xian;平泉县|130823|ping,quan,xian;滦平县|130824|luan,ping,xian;隆化县|130825|long,hua,xian;丰宁满族自治县|130826|feng,ning,man,zu,zi,zhi,xian;宽城满族自治县|130827|kuan,cheng,man,zu,zi,zhi,xian"
}
```

## <a id="hotel-create.order"></a> 一、创建订单
s
###  <a id="hotel-create.order-request"></a> 1.1 请求 post
#### url
```javascript
POST: travel_web/v2/hotelOrder/createOrder
```

#### 输入参数
-|code|类型|名称|备注|
---|---|---|---|---|
-|bizTripId|String|出差单编号|
-|forPrivate|Booleanean|因私因公|
-|arrivalDate|String|入住时间  |'YY-MM-DD'|
-|departureDate|String|离店时间 |  'YY-MM-DD'|
-|latestArrivalTime|String|最晚达到时间 | 'YY-MM-DD HH:mm'（此时间必须比当前时间大，至少比当前时间晚1个小时，最好大于3小时）（注意：最晚到达时间最好在入住当天15:00以后，避免下单失败）|
-|ratePlanCode|String|销价code|
-|hotelOrderRooms|Array|入住人信息|包含多个[hotelOrderRoom](#hotel-create.order-hotelOrderRoom)节点|
-|contactName|String|联系人姓名|
-|contactMobile|String|联系人手机号|
-|contactEmail|String|联系人email|
-|creditCard|Object|信用卡信息|[creditCard](#hotel-create.order-creditCard)|
-|orderRemark|String|订单备注|

##### hotelOrderRoom<a id="hotel-create.order-hotelOrderRoom"></a>

-|code|类型|名称|备注|
---|---|---|---|---|
-|costCenterId|number|成本中心编号|
-|hotelOrderCustomers|Array|入住人信息|包含多个[hotelOrderCustomer](#hotel-create.order-hotelOrderCustomer)节点|

##### hotelOrderCustomer<a id="hotel-create.order-hotelOrderCustomer"></a>

-|code|类型|名称|备注|
---|---|---|---|---|
-|customerName|String|入住人姓名|
-|customerGender|String|入住人性别（该字段为空则默认保密）|[字典](#dict-customerGender)|
-|isUser|Booleanean|是否员工|
-|customerId|number|如果是常用联系人的话，该字段为常用联系人编号|


##### creditCard<a id="hotel-create.order-creditCard"></a>

-|code|类型|名称|备注|
---|---|---|---|---|
-|creditCardNo|String|卡号|
-|cvv|String|验证码|
-|expirationYear|String|有效年|
-|expirationMonth|String|有效月|
-|holderName|String|持卡人姓名|
-|idType|String|证件类型|[字典](#dict-idType)|
-|idNo|String|证件号码|



###  <a id="hotel-create.order-response"></a> 1.2 响应

#### 根节点

-|code|类型|名称|备注|
---|---|---|---|---|
-|success|Boolean|是否成功|
-|results|Object|返回值|[order](#hotel-create.order-info)|

-|msg|String|信息提示|
#####  <a id="hotel-create.order-info"></a> order

-|code|类型|名称|备注|
---|---|---|---|---|
-|hotelOrderId|number|订单id|
-|hotelOrderNo|string|订单编号|
-|state|string|订单状态|

### <a id="hotel-create.order-example"></a> 1.3 示例

#### 输入参数

```javascript
var request = {
  forPrivate: true,                         //是否因私，默认 false  
  arrivalDate: '2016-05-31',                //入店
  departureDate: '2016-06-1',              //离店
  latestArrivalTime: '2016-06-1 01:00',
  ratePlanCode: '852710',
  paymentType: 'SelfPay',
  customerType: 'All',
  checkinDays: 1,                           //每间房入住天数
  hotelOrderRooms: [{
    hotelOrderCustomers: [{
      name: 'qian/jie',
      isUser: false,                        //是否员工
      freId: 1752,                          //如果是常用联系人的话，该字段为常用联系人编号
    }],
    costCenterId: 489
  }],
  contactMobile: '15501302313',
  contactName: '罗盘1',
  contactEmail: '785094749@qq.com'
  creditCard: {
    number: '11111',
    cvv: 'sss',
    ExpirationYear: '2016',
    ExpirationMonth: '05',
    HolderName: 'zxy',
    IdType: 1,                              //证件类型
    IdNo: '3209822222'                      //证件号码
  }
};
```

#### 返回结果

```javascript
var response = {
  success: true,
  msg: '下单成功',
  results: {
     hotelOrderId:110026100
     hotelOrderNo:310200007100
     state:3
  }
};
```

## <a id="order-list"></a> 二、订单列表查询

### <a id="order-list-request"></a> 1.1 请求

#### url

```javascript
GET travel_web/v2/hotelOrder/orderList
```

#### 输入参数

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|createTimeFrom|String|订单创建时间起|'yyyy-MM-dd'|
-|createTimeTo|String|订单创建时间止|'yyyy-MM-dd'|
-|checkinDateFrom|String|入住时间起|'yyyy-MM-dd'|
-|checkinDateTo|String|入住时间止|'yyyy-MM-dd'|
-|customerName|String|入住人|模糊搜索|
-|hotelName|String|酒店名称|模糊搜索|
-|state|String|订单状态编码|[字典](#dict-state)|
-|orderByClause|String|排序字段|create_time desc时间倒序，desc倒序,asc顺序|
-|pageSize|Number|每页数||
-|pageIndex|Number|页码||

### <a id="order-list-response"></a> 1.2 响应

#### 根节点

-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功||
-|total|总数||  
-|results|结果集|包含多个[order](#order-list-info)节点|
-|msg|信息提示||


#### <a id="order-list-info"></a> order 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|arrivalDate|Number|入店时间|毫秒|
-|departureDate|Number|离店时间|毫秒|
-|isCancelable|bool|是否可取消|
-|changeTime|Number|最晚修改/取消时间|毫秒|
-|changeType|String|是否可取消/更改|[字典](#dict-changeType)|
-|checkinDays|Number|入住天数||
-|createTime|Number|订单创建时间|毫秒|
-|currencyCode|String|货币类型|[字典](#dict-currencyCode)|
-|forPrivate|Booleanean|因私因公||
-|guaranteeAmount|Number|担保金额||
-|guaranteeCurrencyCode|String|担保币种||
-|hotelAddress|String|酒店地址||
-|hotelName|String|酒店名称||
-|hotelOrderId|Number|订单id||
-|hotelOrderNo|String|订单编号||
-|hotelOrderRooms|Array|订单房间信息|包含多个[节点](#order-list-hotelOrderRoom)节点|
-|hotelPhone|String|酒店电话||
-|imgUrl|String|酒店图片||
-|paymentType|String|支付类型编码|[字典](#dict-paymentType)|
-|salePrice|Number|销售价格||
-|state|String|供应商订单状态|[字典](#dict-state)|
-|localState|String|本地订单状态|[字典](#dict-localState)|
-|markType|String|订单标志|[字典](#dict-markType)|
-|refundState|String|退单状态|[字典](#dict-refundState)|

#### <a id="order-list-hotelOrderRoom"></a> hotelOrderRoom 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|roomName|String|房型||
-|ratePlanName|String|销价||
-|hotelOrderCustomers|Array|联系人信息|包含多个[hotelOrderCustomer](#order-list-hotelOrderCustomer)节点|

##### <a id="order-list-hotelOrderCustomer"></a> hotelOrderCustomer 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|customerId|Number|入住人编号||
-|customerName|String|入住人姓名||
-|isUser|Booleanean|是否为用户||

### <a id="order-list-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    creationTimeFrom: '2016-06-07',
    creationTimeTo: '2016-06-24',
    checkinTimeFrom: '2016-06-07',
    checkinTimeTo: '2016-06-24',
    customerName: 'andy',
    hotelName: '如心',
    state: '1',
    pageSize: 10,
    pageIndex: 1
  };
```

#### 返回结果

```javascript
var response = {
  msg: '查询订单列表成功',
  total: 2,
  results: [{
    arrivalDate: 1466244770512,
    changeTime: 1466356770512,
    changeType: 'LimitedChange',
    checkinDays: 3,
    createTime: 1466244770512,
    currencyCode: 'RMB', 
    departureDate: 1466246770512,
    forPrivate:false,
    guaranteeAmount: 200,
    hotelAddress: '西城区金融大街乙9号(中国银监会隔壁)',
    hotelName: '北京金融街威斯汀大酒店',
    hotelOrderId: '123',
    hotelOrderNo: '50101447',
    hotelOrderRooms:[{
      roomName: '高级大床房',
      ratePlanName:'含早',
      hotelOrderCustomers:[{
        customerId: 12,
        customerName: '张三',
        isUser: false
      }]
    }],
    hotelPhone: '0512-8903847',
    imgUrl: '...',
    paymentType: 'prepay',
    salePrice: 200,
    state: '1'
  },
  {
    arrivalDate: 1466578770512,
    changeTime: 1466688770512,
    changeType: 'LimitedChange',
    checkinDays: 3,
    createTime: 1466578770512,
    currencyCode: 'RMB', 
    forPrivate: false,
    guaranteeAmount: 498,
    hotelAddress: '西城区金融大街乙9号(中国银监会隔壁)',
    hotelName: '北京金融街威斯汀大酒店',
    hotelOrderId: '123',
    hotelOrderNo: '50101447',
    hotelOrderRooms:[{
      roomName: '高级大床房',
      ratePlanName:'含早',
      hotelOrderCustomers:[{
        customerId: 12,
        customerName: '张三',
        isUser: false
      }]
    }],
    hotelPhone: '0512-8903847',
    imgUrl: '...',
    paymentType: 'prepay',
    salePrice: 498,
    state: '5'
    localState: '0'
  }],
  success: true
};
```

## <a id="order-detail"></a> 三、订单详情查询

### <a id="order-detail-request"></a> 1.1 请求

#### url

```javascript
    GET travel_web/v2/hotelOrder/orderDetail/:hotelOrderId
```
#### 参数

-|CODE|类型|名称|
---|---|---|---|
-|hotelOrderId|Number|订单id|

### <a id="order-detail-response"></a> 1.2 响应

#### 根节点

-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功||
-|results|结果集|[order-detail](#order-detail.info)节点|
-|msg|信息提示||

#### <a id="order-detail.info"></a> order-detail 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|arrivalDate|Number|入店时间|毫秒|
-|changeTime|Number|最晚修改/取消时间|毫秒|
-|changeType|String|是否可取消/更改|[字典](#dict-changeType)|
-|checkinDays|Number|入住天数||
-|contactEmail|String|联系人邮箱||
-|contactMobile|String|联系人手机号||
-|contactName|String|联系人||
-|createTime|Number|订单创建时间|毫秒|
-|currencyCode|String|货币类型|[字典](#dict-currencyCode)|
-|departureDate|Number|离店时间|毫秒|
-|forPrivate|Booleanean|因私因公||
-|guaranteeAmount|Number|担保金额||
-|hoteCode|String|酒店编码||
-|hotelAddress|String|酒店地址||
-|hotelName|String|酒店名称||
-|hotelOrderId|Number|订单id||
-|hotelOrderNo|String|订单编号||
-|hotelOrderRooms|Array|订单房间信息|包含多个[hotelOrderRoom](#order-detail.hotelOrderRoom)节点|
-|hotelPhone|String|酒店电话||
-|imgUrl|String|酒店图片||
-|latestArrivalTime|Number|最晚入住时间|毫秒|
-|orderRemark|String|备注||
-|paymentType|String|支付类型编码|[字典](#dict-paymentType)|
-|purPayType|String|付款方式|[字典](#dict-purPayType)|
-|roomCount|Number|房量||
-|salePrice|Number|销售价格||
-|state|String|供应商订单状态编码|[字典](#dict-state)|
-|localState|String|本地订单状态|[字典](#dict-localState)|
-|markType|String|订单标志|[字典](#dict-markType)|
-|refundState|String|退单状态|[字典](#dict-refundState)|

#### <a id="order-detail.hotelOrderRoom"></a> hotelOrderRoom 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|roomCode|String|房型编码|
-|roomName|String|房型||
-|ratePlanCode|String|销售计划编码|
-|ratePlanName|String|销价||
-|hotelOrderCustomers|Array|联系人信息|包含多个[hotelOrderCustomer](#order-detail.hotelOrderCustomer)节点|
-|roomNightlyRates|Array|间夜信息|包含多个[roomNightlyRate](#order-detail.roomNightlyRate)节点|

##### <a id="order-detail.hotelOrderCustomer"></a> hotelOrderCustomer 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|customerId|Number|入住人编号||
-|customerName|String|入住人姓名||
-|isUser|Booleanean|是否为用户||

##### <a id="order-detail.roomNightlyRate"></a> roomNightlyRate 节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|saleDate|Number|间夜时间|毫秒|
-|salePrice|Number|间夜价格||
-|refundState|Number|间夜退单状态|如果有间夜退单，该参数才会有值|
-|breakfastInfo|String|早餐信息||

### <a id="order-detail-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    hotelOrderId: 123
  };
```

```javascript
var response = {
  msg: '查询订单详情成功',
  result: {
    arrivalDate: 1466244770512,
    changeTime: 1466356770512,
    changeType: 'LimitedChange',
    checkinDays: 3,
    contactEmail: '12@163.com',
    contactMobile: '13849373933',
    contactName: '李四',
    createTime: 1466244770512, 
    currencyCode: 'RMB',
    departureDate: 1466246770512,
    forPrivate:false,
    guaranteeAmount: 200,
    hotelAddress: '西城区金融大街乙9号(中国银监会隔壁)',
    hotelName: '北京金融街威斯汀大酒店',
    hotelOrderId: 123,
    hotelOrderNo: '50101447',
    hotelOrderRooms:[{
      hotelOrderCustomers:[{
        customerId: 11,
        customerName: '李四',
        isUser: false
      }],
      ratePlanName:'含早',
      roomName: '高级大床房',
      roomNightlyRates:[{
        saleDate: 1466244770512,
        salePrice: 200
      }]
    }],
    hotelPhone: '0512-8903847',
    imgUrl: '...',
    latestArrivalTime: 1466256770512,
    orderRemark: '备注',
    paymentType: 'selfpay',
    purPayType: '3',
    roomCount: 1,
    salePrice:200,
    state: '1'
    localState: '2'
  }, 
  success: true
};
```

## <a id="order-cancel"></a> 四、取消订单

### <a id="order-cancel-request"></a> 1.1 请求

#### url

```javascript
   PUT travel_web/v2/hotelOrder/cancelOrder
```

#### 输入参数

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|hotelOrderId|Number|订单id||
-|cancelCode|String|取消编码|[字典](#dict-cancelCode)|
-|cancelReason|String|取消原因||

### <a id="order-cancel-response"></a> 1.2 响应

#### 根节点

-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功||
-|results|结果集|[order](#order-cancel.info)节点|
-|msg|信息提示||

#### <a id="order-cancel.info"></a> order 节点
-|CODE|类型|名称|备注|
---|---|---|---|---|
-|hotelOrderId|Number|订单id||
-|hotelOrderNo|String|订单编号||
-|paymentType|String|支付类型编码|[字典](#dict-paymentType)|
-|localState|String|订单状态编码|[字典](#dict-localState)|
-|cancelCode|String|取消类型|[字典](#dict-cancelCode)|
-|cancelReason|String|取消原因||

### <a id="order-cancel-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    hotelOrderId: 201601234,
    cancelCode: '15',
    cancelReason: '重下单'
  };
```
#### 返回结果

```javascript
var response = {
  msg: '取消订单成功',
  results: {
    hotelOrderId: 201601234,
    hotelOrderNo: '2343242',
    cancelCode: '15',
    cancelReason: '重下单',
    localState: '4'
  },
  success: true
}
```

## <a id="order-pay"></a> 五、罗盘支付订单

### <a id="order-pay-request"></a> 1.1 请求

#### url

```javascript
   PUT travel_web/v2/hotelOrder/pay
```

#### 输入参数

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|hotelOrderId|Number|订单id||
-|payPassword|String|支付密码||

### <a id="order-pay-response"></a> 1.2 响应

#### 根节点

-|CODE|名称|备注|
---|---|---|---|
-|success|是否成功||
-|msg|信息提示||

### <a id="order-cancel-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    "hotelOrderId": 698,
    "PayPassword": "111111"
};
```

#### 返回结果

```javascript
var response = {
  msg: '订单支付成功',
  success: true
}
```

## <a id="creditcard"></a> 六、信用卡验证

###  <a id="creditcard-request"></a> 1.1 请求 post

#### url

```javascript
POST: travel_web/v2/hotelOrder/creditcardValidate
```

#### 输入参数

-|code|类型|名称|备注|
---|---|---|---|---|
-|creditCardNo|String|卡号|
-|ratePlanCode|String|销售计划编号|

###  <a id="creditcard-response"></a> 1.2 响应

#### 根节点

-|code|类型|名称|备注|
---|---|---|---|---|
-|success|Boolean|是否成功|
-|results|Object|返回值|[creditCard](#creditCard.info)|
-|msg|String|信息提示|

#####  <a id="creditCard.info"></a> creditCard

-|code|类型|名称|备注|
---|---|---|---|---|
-|creditCardNo|String|卡号|
-|isValid|Boolean|是否有效|
-|isNeedVerifyCode|Boolean|是否需要提供CVV验证码|

### <a id="creditcard-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    checkCreditCard: '4033910000000000',
    ratePlanCode: 'el231413'
  };
```
#### 返回结果
```javascript
var response = {
  success: true,
  msg: '信用卡验证成功',
  results: {
    creditCardNo: '4033910000000000',
    isValid: true,
    isNeedVerifyCode: false,
  }
};
```

## <a id="checkName"></a> 七、国际酒店姓名验证

###  <a id="checkName-request"></a> 1.1 请求 post

#### url

```javascript
POST: travel_web/v2/hotelOrder/customerValidate
```

#### 输入参数

-|code|类型|名称|备注|
---|---|---|---|---|
-|customerName|String|姓名|
-|ratePlanCode|String|销售计划编号|

###  <a id="checkName-response"></a> 1.2 响应

#### 根节点
-|code|类型|名称|备注|
---|---|---|---|---|
-|success|Boolean|是否成功|
-|results|Object|返回值|[customerName](#checkName.customerName)|
-|msg|String|信息提示|

##### <a id="checkName.customerName"></a> customerName

-|code|类型|名称|备注|
---|---|---|---|---|
1|customerName|"张三"|入住人姓名|
2|isValid|Boolean|是否合法|

### <a id="checkName-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    customerName: '张三'
  };
```

#### 返回结果

```javascript
var response = {
  success: true,
  msg: '姓名验证成功',
  results: {
    checkName: '张三',
    isValid: true
  }
};
```

## <a id="paymentMethod"></a> 八、支付方式验证

###  <a id="paymentMethod-request"></a> 1.1 请求 post

#### url

```javascript
GET: travel_web/pays/calc/paymentmethod/:hotelOrderNo
```

#### 输入参数

-|code|类型|名称|备注|
---|---|---|---|---|
-|hotelOrderNo|String|订单号|

###  <a id="paymentMethod-response"></a> 1.2 响应

#### 根节点

-|code|类型|名称|备注|
---|---|---|---|---|
-|success|Boolean|是否成功|
-|results|Object|返回值|[payMethod](#paymentMethod.payMethod)|
-|msg|String|信息提示|

##### <a id="paymentMethod.payMethod"></a> customerName

-|code|类型|名称|备注|
---|---|---|---|---|
1|monthNoPwd|Boolean|罗盘支付无密码|
2|monthPwd|Boolean|罗盘支付有密码|
3|cardPay|Boolean|信用卡支付|

### <a id="paymentMethod-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    hotelOrderNo: '310200007350'
  };
```

#### 返回结果

```javascript
var response = {
  "success": true, 
    "msg": "支付验证成功", 
    "results": {
        "monthNoPwd": false, 
        "monthPwd": true, 
        "cardPay": false
    }
  };
```

## <a id="dataValidate"></a> 九、下单数据验证

（该接口艺龙下单数据验证有效）

###  <a id="dataValidate-request"></a> 1.1 请求 post

#### url

```javascript
POST:  travel_web/v2/hotelOrder/dataValidate
```
#### 输入参数

-|code|类型|名称|备注|
---|---|---|---|---|
-|arrivalDate|Date|到店日期|'YY-MM-DD'|
-|departDate|Date|离店日期|'YY-MM-DD'|
-|latestArrivalTime|Date|最晚到店时间|'YY-MM-DD HH:mm'|
-|ratePlanCode|String|价格计划ID||
-|floorPrice|BigDecimal|底价||
-|numberOfRooms|int|房间数量||

###  <a id="dataValidate-response"></a> 1.2 响应

#### 根节点

-|code|类型|名称|备注|
---|---|---|---|---|
-|success|Boolean|是否成功|
-|results|Object|返回值|dataValidate节点|
-|msg|String|信息提示|

#### <a id="order-dataValidate.info"></a>  dataValidate节点

-|CODE|类型|名称|备注|
---|---|---|---|---|
-|resultCode|String|验证结果|返回结果：OK:  正常可预订Product：产品问题 Inventory：房量不够 Rate:价格不符|
-|guaranteeRate|BigDecimal|担保金额|如果是担保订单才有这个值|
-|currencyCode|String|货币类型||
-|cancelTime|Date|最晚取消时间|担保订单可取消的时间，如果返回的时间小于当前时间，则代表此订单不可变更取消|
-|errorMessage|String|具体结果信息||

### <a id="dataValidate-example"></a> 1.3 示例

#### 输入参数

```javascript
  var request = {
    "arrvalDate": "2016-07-07",
    "departDate":"2016-07-08",
    "latestArrivalTime":"2016-07-07 18:00",
    "ratePlanCode":"fc123324",
    "floorPrice":"888",
    "numberOfRooms":2
  };
```

#### 返回结果

```javascript
var response = {
  "success": true, 
    "msg": "数据验证成功", 
    "results": {
        "resultCode": "ok", 
        "guaranteeRate": 888, 
        "currencyCode": "RMB",
        "cancelTime":22223424
    }
  };
```

## <a id="dict"></a> 字典

#### <a id= "dict-starRate"></a>1.1 starRate

-|code|name|备注|
---|---|---|---|
-|0|无星级||
-|1|一星级|| 
-|2|二星级|| 
-|3|三星级|| 
-|4|四星级|| 
-|5|五星级|| 

#### <a id= "dict-category"></a>1.2 category

-|code|name|备注|
---|---|---|---|
-|-1|经济型酒店||
-|0|经济型酒店||
-|1|一星级|| 
-|2|二星级|| 
-|3|三星级|| 
-|4|四星级|| 
-|5|五星级|| 

#### <a id= "dict-facilities"></a>1.3 facilities<待补充>

-|code|name|备注|
---|---|---|---|
-|1|会议室||

#### <a id= "dict-currencyCode"></a>1.4 currencyCode

-|code|name|备注|
---|---|---|---|
-|HKD|港币||
-|MOP|澳币||
-|CNY|人民币||
-|TWD|新台币||

#### <a id= "dict-paymentType"></a>1.5 paymentType

-|code|name|备注|
---|---|---|---|
-|SelfPay|前台现付||
-|PrePay|预付||

#### <a id= "dict-guaranteeType"></a>1.6 guaranteeType

-|code|name|备注|
---|---|---|---|
-|FirstNightCost|首晚房费担保||
-|FullNightCost|全额房费担保||


#### <a id= "dict-customerType"></a>1.7 customerType

-|code|name|备注|
---|---|---|---|
-|All|统一价||
-|Chinese|内宾价，需提示客人“须持大陆身份证入住”||
-|OtherForeign|外宾价，需提示客人“须持国外护照入住”||
-|HongKong|港澳台客人价，需提示客人“须持港澳台身份证入住”||
-|Japanese|日本客人价，需提示客人“须持日本护照入住”||


#### <a id= "dict-idType"></a>1.8 idType

-|code|name|备注|
---|---|---|---|
-|IdentityCard|身份证||
-|Passport|护照||
-|Other|其他||


#### <a id= "dict-bookRuleType"></a>1.9 bookRuleType

-|code|name|备注|
---|---|---|---|
-|NeedNationality|务必提供客人国籍||
-|PerRoomPerName|务必提供客人国籍||
-|ForeignerNeedEnName|务必提供客人国籍||
-|RejectCheckinTime|务必提供客人国籍||
-|NeedPhoneNo|务必提供客人国籍||


#### <a id="dict-localState"></a>  1.10 localState 字典 

-|CODE|NAME|备注|
---|---|---|---|
-|-2|下单失败||
-|-1|失效||
-|0|确认中||
-|1|确认失败||
-|2|已确认||
-|3|已成交||
-|4|已取消||
-|5|未支付||
-|6|非担保未入住||
-|7|担保未入住||

#### <a id= "dict-changeType"></a> 1.11 changeType 字典
-|CODE|NAME|备注|
---|---|---|---|
-|NoChange|不可取消或修改||
-|LimitedChange|限时修改|当前时间不超过ChangeTime的可修改或取消|
-|AnyChange|任何时可取消或修改||


#### <a id="dict-cancelCode"></a> 1.12 cancelCode 字典 

-|CODE|名称|类型|备注|
---|---|---|---|---|
-|1|行程变更|string||
-|2|支付失败|string||
-|3|时限内未支付|string||
-|4|酒店位置不合适|string||
-|5|不愿告知原因|string||
-|6|无效单|string||
-|7|错误预订|string||
-|8|不可抗力因素|string||
-|9|通过其它途径预订|string||
-|10|对酒店相关条件不满意|string||
-|11|航班推迟|string||
-|12|价格过高，客人不接受|string||
-|13|通过其它途径预订|string||
-|14|已换酒店|string||
-|15|重单|string||
-|16|其它|string||


### <a id= "dict-markType"></a> 1.13 markType
-|code|name|备注
----|----|----|----
-|prepay|预付||
-|guarantee|担保||
-|selfSign|企业协议||
-|lpSign|罗盘协议||

### <a id= "dict-sort"></a> 1.14 sort
-|code|name|备注
----|----|----|----
-|RateDesc|价格降序||
-|RateAsc|价格升序||
-|Default|企业协议||
-|StarrateDesc|星级降序||
-|StarrateAsc|星级升序||



#### <a id="dict-purPayType"></a>  1.15 purPayType 字典

-|CODE|名称|类型|
---|---|---|---|
-|0|无需支付|string|
-|1|现金||
-|2|支付宝||
-|3|网银||
-|4|预付月结||
-|5|转账支票||
-|6|委托收款||
-|7|支付宝代扣||
-|8|快钱||
-|9|信用卡||
-|10|支付宝||
-|11|BSP||
-|12|德付通||
-|13|公务员信用卡||
-|14|团卡||
-|15|周结||
-|16|单结||
-|17|垫付||
-|18|转账||


#### <a id="dict-source"></a>  1.16 source 字典

-|CODE|名称|类型|
---|---|---|---|
-|app|app||
-|pc|电脑端||
-|weixin|微信||


#### <a id="dict-customerGender"></a>  1.17 customerGender 字典
-|CODE|名称|类型|
---|---|---|---|
-|男|Maile||
-|女|Female||
-|保密|Unknown||

#### <a id="dict-state"></a>  1.18 State 字典

-|CODE|名称|类型|
---|---|---|---|
-|-1|预定失败||
-|0|待支付||
-|1|确认中||
-|2|确认失败||
-|3|预定成功||
-|4|已取消||

#### <a id="dict-refundState"></a>  1.19 refundState 字典

-|CODE|名称|类型|
---|---|---|---|
-|-1|退订失效||
-|1|已申请||
-|2|退订中||
-|3|退订成功||
-|4|退订失败||

