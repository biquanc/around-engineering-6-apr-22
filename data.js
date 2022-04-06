var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2017890961385902,
        "pitch": -0.057807786185676946,
        "fov": 1.2893244567068969
      },
      "linkHotspots": [
        {
          "yaw": 0.0034796514797363898,
          "pitch": -0.2315771116575398,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7007357053451244,
          "pitch": -0.1260071340381721,
          "title": "College of Design and Engineering (EA)",
          "text": "Main entrance to EA"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.04661629643378262,
        "pitch": 0.11309462964578643,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -3.1298249056996585,
          "pitch": 0.03745287758862226,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5216626092442436,
          "pitch": 0.01992532812413117,
          "title": "Spinelli Coffee Company",
          "text": "Hmm... yummy!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.2885082912550274,
        "pitch": -0.3516076506732553,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.01611100198726234,
          "pitch": -0.10502231392302974,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": 2.953505924016075,
          "pitch": 0.09742236699642248,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.39882170895948477,
          "pitch": -0.031134859285703698,
          "title": "Entrance to EA",
          "text": ""
        }
      ]
    }
  ],
  "name": "biquan's first try",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
