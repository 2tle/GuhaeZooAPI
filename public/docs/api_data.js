define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1/barcode/:barcode",
    "title": "바코드 삭제",
    "name": "DeleteBarcode",
    "group": "바코드",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>바코드</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/barcode/barcode.controller.js",
    "groupTitle": "바코드"
  },
  {
    "type": "get",
    "url": "/api/v1/barcode/:barcode",
    "title": "바코드 확인",
    "name": "GetCheckBarcode",
    "group": "바코드",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>확인할 바코드 값</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>바코드 유무 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/barcode/barcode.controller.js",
    "groupTitle": "바코드"
  },
  {
    "type": "get",
    "url": "/api/v1/barcode/list",
    "title": "나의 바코드 목록 가져오기",
    "name": "GetMyBarcodeList",
    "group": "바코드",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "barcode",
            "description": "<p>나의 바코드의 데이터 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tbarcode: [\n\t\t{\n\t\t\tuid: \"useruid\",\n\t\t\tname: \"치킨\",\n\t\t\tprice: 10000,\n\t\t\tbarcode: \"1678265678\",\n\t\t\tphoto: \"photoUid\"\n\t\t},\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/barcode/barcode.controller.js",
    "groupTitle": "바코드"
  },
  {
    "type": "post",
    "url": "/api/v1/barcode",
    "title": "바코드 업로드",
    "name": "UploadBarcode",
    "group": "바코드",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "description": "<p>제목</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "price",
        "description": "<p>가격</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "photo",
        "description": "<p>올릴 이미지의 ID값 ( 그냥 아무거나 넣어주세요 )</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "barcode",
            "description": "<p>업로드한 바코드의 데이터</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tuid: \"useruid\",\n\tname: \"치킨\",\n\tprice: 10000,\n\tbarcode: \"1678265678\",\n\tphoto: \"photoUid\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/barcode/barcode.controller.js",
    "groupTitle": "바코드"
  },
  {
    "type": "post",
    "url": "/api/v1/barcode/image/",
    "title": "바코드 이미지 업로드",
    "name": "UploadBarcodeImage",
    "description": "<p>헤더 사용 필수 Content-Type :  multipart/form-data</p>",
    "group": "바코드",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "File",
        "optional": false,
        "field": "image",
        "description": "<p>이미지 파일</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>업로드한 이미지의 고유값</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tid: \"imageUID\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/barcode/barcode.controller.js",
    "groupTitle": "바코드"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/by-email/:email/exists",
    "title": "이메일 사용 여부",
    "name": "CheckUserWhohasEmail",
    "group": "사용자",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exists",
            "description": "<p>결과 사용중이면 true 아니면 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공 - 사용가능:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: false\n}",
          "type": "json"
        },
        {
          "title": "성공 - 사용중:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/by-username/:username/exists",
    "title": "이름 사용 여부",
    "name": "CheckUserWhohasUsername",
    "group": "사용자",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exists",
            "description": "<p>결과 사용중이면 true 아니면 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공 - 사용가능:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: false\n}",
          "type": "json"
        },
        {
          "title": "성공 - 사용중:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/dict",
    "title": "내 도감 ID목록 가져오기",
    "name": "GetMyDictList",
    "group": "사용자",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "dict",
            "description": "<p>ID값 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tdict: [3,2,6]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/point",
    "title": "나의 포인트 가져오기",
    "name": "GetMyPoint",
    "group": "사용자",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "point",
            "description": "<p>내 포인트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tpoint: 100\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/point/:email",
    "title": "타인의 포인트 가져오기",
    "name": "GetOtherPoint",
    "group": "사용자",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>타인의 이메일</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "point",
            "description": "<p>타인의 포인트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tpoint: 100\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/dict/:dict",
    "title": "내 도감에 dict 추가",
    "name": "UpdateMyDict",
    "group": "사용자",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dict",
            "description": "<p>동물 고유 값</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>true or false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/point",
    "title": "내 포인트 수정",
    "name": "UpdatePoint",
    "group": "사용자",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "point",
        "description": "<p>포인트값 (+-구분, 기존값에서 더하거나 감소)</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>true or false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "patch",
    "url": "/api/v1/auth/profile",
    "title": "프로필 이미지 업로드",
    "name": "UploadProfileImage",
    "description": "<p>헤더 사용 필수 Content-Type :  multipart/form-data</p>",
    "group": "사용자",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "File",
        "optional": false,
        "field": "image",
        "description": "<p>이미지 파일</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/shop",
    "title": "상점아이템 두짝씩 가져오기",
    "name": "GetShopItem",
    "group": "상점",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰 (테스트 할때만 제거)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "shopItem",
            "description": "<p>샵아이템 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "\tHTTP/1.1 200 OK\n\t{\n\t\tshopItem: [\n\t\t\t{\n\t\t\t\tcategory1: \"인형\",\n\t\t\t\tprice1: 1000,\n\t\t\t\tname1: \"고래인형\",\n\t\t\t\tphoto1: \"https://....jpg\"\n\t\t\t\tdescription1: \"자 이건 환경을 보호하는 인형이요.\",\n\t\t\t\tcategory2: \"인형\",\n\t\t\t\tprice2: 1000,\n\t\t\t\tname2: \"고래인형\",\n\t\t\t\tphoto2: \"https://....jpg\"\n\t\t\t\tdescription2: \"자 이건 환경을 보호하는 인형이요.\"\t\n \t\t\t},\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/shop/shop.controller.js",
    "groupTitle": "상점"
  },
  {
    "type": "get",
    "url": "/api/v1/shop/random",
    "title": "랜덤으로 상점아이템 하나 가져오기",
    "name": "GetShopItemRandom",
    "group": "상점",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰 (테스트 할때만 제거)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "shopItem",
            "description": "<p>샵아이템 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "\tHTTP/1.1 200 OK\n\t{\n\t\tshopItem: [\n\t\t\t{\n\t\t\t\tcategory1: \"인형\",\n\t\t\t\tprice1: 1000,\n\t\t\t\tname1: \"고래인형\",\n\t\t\t\tphoto1: \"https://....jpg\"\n\t\t\t\tdescription1: \"자 이건 환경을 보호하는 인형이요.\",\n\t\t\t\tcategory2: \"인형\",\n\t\t\t\tprice2: 1000,\n\t\t\t\tname2: \"고래인형\",\n\t\t\t\tphoto2: \"https://....jpg\"\n\t\t\t\tdescription2: \"자 이건 환경을 보호하는 인형이요.\"\t\n \t\t\t},\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/shop/shop.controller.js",
    "groupTitle": "상점"
  },
  {
    "type": "get",
    "url": "/api/v1/image/:id",
    "title": "바코드 확인",
    "name": "GetImage",
    "group": "이미지",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>가져올 이미지의 Id값</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>그냥이미지.</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/image/image.controller.js",
    "groupTitle": "이미지"
  },
  {
    "type": "get",
    "url": "/api/v1/image/name/:pname",
    "title": "[상품한정] 상품 이미지 가져오기",
    "name": "GetImageByProductName",
    "group": "이미지",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pname",
            "description": "<p>정확한 상품의 이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>그냥이미지.</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/image/image.controller.js",
    "groupTitle": "이미지"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/new",
    "title": "새 계정 생성",
    "name": "CreateNewUser",
    "group": "인증",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>생성할 이름</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>생성할 이메일</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "password",
        "description": "<p>생성할 비밀번호</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\ttoken:\"eyJwe...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/local",
    "title": "로그인",
    "name": "Login",
    "group": "인증",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>이메일</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "password",
        "description": "<p>비밀번호</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>사용자의 토큰</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "username",
            "description": "<p>이름 등록 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "profile",
            "description": "<p>프로필 이미지 등록 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\ttoken:\"eyJwe...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "patch",
    "url": "/api/v1/auth/password",
    "title": "비밀번호 변경",
    "name": "UpdatePassword",
    "group": "인증",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "currentPasswrod",
        "description": "<p>현재 비밀번호</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "changePassword",
        "description": "<p>변경할 비밀번호</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "patch",
    "url": "/api/v1/auth/by-username/:username",
    "title": "이름 업데이트",
    "name": "UpdateUsername",
    "group": "인증",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>업데이트할 이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "get",
    "url": "/api/v1/posts/post",
    "title": "게시글 가져오기",
    "name": "GetPost",
    "group": "포스트(게시판)",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "posts",
            "description": "<p>포스트 객체 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tposts:[\n\t\t{\n\t\t\t\"likes\":[],\n\t\t\t\"uid\": \"62d0e9ea8603b8033854c1f8\",\n\t\t\t\"title\": \"게시글1\",\n\t\t\t\"text\": \"게시글2\",\n\t\t\t\"photo\": \"-1\",\n\t\t\t\"created\": \"2022-07-15 14:25:22\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/posts/posts.controller.js",
    "groupTitle": "포스트(게시판)"
  },
  {
    "type": "get",
    "url": "/api/v1/posts/post/keyword/:keyword",
    "title": "타이틀에 keyword가 포함된 게시글 가져오기",
    "name": "GetPostByKeyword",
    "group": "포스트(게시판)",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>키워드</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "posts",
            "description": "<p>포스트 객체 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "{\n\tposts:[\n\t\t{\n\t\t\t\"likes\":[],\n\t\t\t\"uid\": \"62d0e9ea8603b8033854c1f8\",\n\t\t\t\"title\": \"게시글1\",\n\t\t\t\"text\": \"게시글2\",\n\t\t\t\"photo\": \"-1\",\n\t\t\t\"created\": \"2022-07-15 14:25:22\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/posts/posts.controller.js",
    "groupTitle": "포스트(게시판)"
  },
  {
    "type": "post",
    "url": "/api/v1/posts/post",
    "title": "포스트 게시글 업로드",
    "name": "UploadPost",
    "group": "포스트(게시판)",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "description": "<p>타이틀</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "text",
        "description": "<p>텍스트</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "photo",
        "description": "<p>올릴 이미지의 ID값</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/posts/posts.controller.js",
    "groupTitle": "포스트(게시판)"
  },
  {
    "type": "post",
    "url": "/api/v1/posts/image",
    "title": "포스트 이미지 업로드",
    "name": "UploadPostImage",
    "description": "<p>헤더 사용 필수 Content-Type :  multipart/form-data</p>",
    "group": "포스트(게시판)",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "File",
        "optional": false,
        "field": "image",
        "description": "<p>이미지 파일</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/posts/posts.controller.js",
    "groupTitle": "포스트(게시판)"
  }
] });
