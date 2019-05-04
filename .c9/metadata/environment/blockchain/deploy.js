{"filter":false,"title":"deploy.js","tooltip":"/blockchain/deploy.js","undoManager":{"mark":80,"position":80,"stack":[[{"start":{"row":42,"column":0},"end":{"row":43,"column":28},"action":"remove","lines":["\tconsole.log(record.vin);","\tconsole.log(record.status);"],"id":2},{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":61},"action":"remove","lines":["\tconsole.log(\"Contract deployed to\", result.options.address);"],"id":3},{"start":{"row":26,"column":41},"end":{"row":27,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":34,"column":13},"end":{"row":34,"column":19},"action":"remove","lines":["Status"],"id":4},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["H"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["a"]},{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"insert","lines":["s"]},{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":["h"]}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":47},"action":"remove","lines":["status"],"id":5},{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"insert","lines":["r"]},{"start":{"row":34,"column":42},"end":{"row":34,"column":43},"action":"insert","lines":["e"]},{"start":{"row":34,"column":43},"end":{"row":34,"column":44},"action":"insert","lines":["c"]}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":44},"action":"remove","lines":["rec"],"id":6},{"start":{"row":34,"column":41},"end":{"row":34,"column":51},"action":"insert","lines":["recordHash"]}],[{"start":{"row":38,"column":16},"end":{"row":38,"column":22},"action":"remove","lines":["Status"],"id":7},{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"insert","lines":["H"]},{"start":{"row":38,"column":17},"end":{"row":38,"column":18},"action":"insert","lines":["a"]},{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"insert","lines":["s"]},{"start":{"row":38,"column":19},"end":{"row":38,"column":20},"action":"insert","lines":["h"]}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":52},"action":"remove","lines":["status"],"id":8},{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["h"]},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"insert","lines":["a"]},{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"insert","lines":["s"]},{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"insert","lines":["h"]}],[{"start":{"row":16,"column":27},"end":{"row":16,"column":33},"action":"remove","lines":["status"],"id":9},{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["h"]},{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["a"]},{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":["s"]},{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":["h"]}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["\tconsole.log(\"Attempting to deploy from account\", accounts[0]);",""],"id":10},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""]},{"start":{"row":17,"column":47},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":12,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["const initialVin = \"1234\";","const initialStatus = \"Brakes: Good, Transmission: Good\";","let retrurnAddress = \"0x5A9E7014784134b0880A27B33BB6BE6393b160c0\";",""],"id":11},{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["\t"],"id":12}],[{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"insert","lines":["l"],"id":13},{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":["e"]},{"start":{"row":19,"column":3},"end":{"row":19,"column":4},"action":"insert","lines":["t"]}],[{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"insert","lines":[" "],"id":14}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":[" "],"id":15},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["t"]},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["y"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["p"]},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["e"]},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":[","]}],[{"start":{"row":16,"column":45},"end":{"row":16,"column":46},"action":"insert","lines":[" "],"id":16},{"start":{"row":16,"column":46},"end":{"row":16,"column":47},"action":"insert","lines":["t"]},{"start":{"row":16,"column":47},"end":{"row":16,"column":48},"action":"insert","lines":["y"]},{"start":{"row":16,"column":48},"end":{"row":16,"column":49},"action":"insert","lines":["o"]},{"start":{"row":16,"column":49},"end":{"row":16,"column":50},"action":"insert","lines":["p"]},{"start":{"row":16,"column":50},"end":{"row":16,"column":51},"action":"insert","lines":["e"]}],[{"start":{"row":16,"column":50},"end":{"row":16,"column":51},"action":"remove","lines":["e"],"id":17},{"start":{"row":16,"column":49},"end":{"row":16,"column":50},"action":"remove","lines":["p"]},{"start":{"row":16,"column":48},"end":{"row":16,"column":49},"action":"remove","lines":["o"]}],[{"start":{"row":16,"column":48},"end":{"row":16,"column":49},"action":"insert","lines":["p"],"id":18},{"start":{"row":16,"column":49},"end":{"row":16,"column":50},"action":"insert","lines":["e"]},{"start":{"row":16,"column":50},"end":{"row":16,"column":51},"action":"insert","lines":[","]}],[{"start":{"row":26,"column":53},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":27,"column":1},"end":{"row":27,"column":53},"action":"insert","lines":["const resultVIN = await result.methods.vin().call();"],"id":20}],[{"start":{"row":27,"column":13},"end":{"row":27,"column":16},"action":"remove","lines":["VIN"],"id":21},{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":["T"]},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["y"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["p"]},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":27,"column":41},"end":{"row":27,"column":44},"action":"remove","lines":["vin"],"id":22},{"start":{"row":27,"column":41},"end":{"row":27,"column":42},"action":"insert","lines":["r"]},{"start":{"row":27,"column":42},"end":{"row":27,"column":43},"action":"insert","lines":["e"]},{"start":{"row":27,"column":43},"end":{"row":27,"column":44},"action":"insert","lines":["c"]}],[{"start":{"row":27,"column":41},"end":{"row":27,"column":44},"action":"remove","lines":["rec"],"id":23},{"start":{"row":27,"column":41},"end":{"row":27,"column":51},"action":"insert","lines":["recordType"]}],[{"start":{"row":31,"column":17},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":32,"column":0},"end":{"row":32,"column":2},"action":"insert","lines":["\t\t"]},{"start":{"row":32,"column":2},"end":{"row":32,"column":3},"action":"insert","lines":["t"]},{"start":{"row":32,"column":3},"end":{"row":32,"column":4},"action":"insert","lines":["y"]},{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["p"]},{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["e"]},{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":[":"]}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":[" "],"id":25},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["r"]},{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["u"],"id":26}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"remove","lines":["u"],"id":27}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["s"],"id":28},{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["u"]},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["l"]}],[{"start":{"row":32,"column":8},"end":{"row":32,"column":13},"action":"remove","lines":["resul"],"id":29},{"start":{"row":32,"column":8},"end":{"row":32,"column":18},"action":"insert","lines":["resultType"]}],[{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":[","],"id":30}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":13},"action":"remove","lines":["er"],"id":31},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"remove","lines":["t"],"id":32}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["e"],"id":33}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["r"],"id":34}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":17},"action":"remove","lines":["interface"],"id":38},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["a"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["b"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["i"]}],[{"start":{"row":15,"column":55},"end":{"row":15,"column":64},"action":"remove","lines":["interface"],"id":39},{"start":{"row":15,"column":55},"end":{"row":15,"column":56},"action":"insert","lines":["a"]},{"start":{"row":15,"column":56},"end":{"row":15,"column":57},"action":"insert","lines":["b"]},{"start":{"row":15,"column":57},"end":{"row":15,"column":58},"action":"insert","lines":["i"]}],[{"start":{"row":25,"column":55},"end":{"row":25,"column":64},"action":"remove","lines":["interface"],"id":40},{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"insert","lines":["a"]},{"start":{"row":25,"column":56},"end":{"row":25,"column":57},"action":"insert","lines":["b"]},{"start":{"row":25,"column":57},"end":{"row":25,"column":58},"action":"insert","lines":["u"]}],[{"start":{"row":25,"column":57},"end":{"row":25,"column":58},"action":"remove","lines":["u"],"id":41}],[{"start":{"row":25,"column":57},"end":{"row":25,"column":58},"action":"insert","lines":["i"],"id":42}],[{"start":{"row":24,"column":24},"end":{"row":24,"column":33},"action":"remove","lines":["interface"],"id":43},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["a"]},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["b"]},{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["i"]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":11},"action":"remove","lines":["abi"],"id":44},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["i"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["n"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["t"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["e"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["r"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["f"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["a"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["c"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":55},"end":{"row":15,"column":58},"action":"remove","lines":["abi"],"id":45},{"start":{"row":15,"column":55},"end":{"row":15,"column":56},"action":"insert","lines":["i"]},{"start":{"row":15,"column":56},"end":{"row":15,"column":57},"action":"insert","lines":["n"]},{"start":{"row":15,"column":57},"end":{"row":15,"column":58},"action":"insert","lines":["t"]},{"start":{"row":15,"column":58},"end":{"row":15,"column":59},"action":"insert","lines":["e"]},{"start":{"row":15,"column":59},"end":{"row":15,"column":60},"action":"insert","lines":["r"]},{"start":{"row":15,"column":60},"end":{"row":15,"column":61},"action":"insert","lines":["f"]},{"start":{"row":15,"column":61},"end":{"row":15,"column":62},"action":"insert","lines":["a"]},{"start":{"row":15,"column":62},"end":{"row":15,"column":63},"action":"insert","lines":["c"]},{"start":{"row":15,"column":63},"end":{"row":15,"column":64},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":0},"end":{"row":21,"column":2},"action":"remove","lines":["const deploy = async (vin, type, hash) => {","\tconst accounts = await web3.eth.getAccounts();","\t// Deploy CarReport Contract with initial VIN and initial Status","\tconst result = await new web3.eth.Contract(JSON.parse(interface))","\t\t.deploy({ data: bytecode, arguments: [ vin, type, hash ] })","\t\t.send({ gas: \"1000000\", from: accounts[0] });","\t","\tlet retrurnAddress = result.options.address;","\treturn retrurnAddress;","};"],"id":46},{"start":{"row":12,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["const deploy = async (vin, type, hash) => {","\tconst accounts = await web3.eth.getAccounts();","","\t// Deploy CarReport Contract with initial VIN and initial Status","\tconst result = await new web3.eth.Contract(JSON.parse(interface))","\t\t.deploy({ data: bytecode, arguments: [ vin, type, hash ] })","\t\t.send({ gas: \"1000000\", from: accounts[0] });","","\tretrurnAddress = result.options.address;","\t//console.log(\"Contract deployed to\", result.options.address);","\treturn retrurnAddress;","};"]}],[{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"insert","lines":["l"],"id":47},{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":[";"]}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"remove","lines":[";"],"id":48}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["e"],"id":49}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"remove","lines":["e"],"id":50}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["l"],"id":51}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"remove","lines":["l"],"id":52}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["e"],"id":53},{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"insert","lines":["t"]}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":[" "],"id":54}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":63},"action":"remove","lines":["\t//console.log(\"Contract deployed to\", result.options.address);"],"id":55},{"start":{"row":20,"column":45},"end":{"row":21,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":17,"column":46},"end":{"row":17,"column":50},"action":"remove","lines":["type"],"id":64},{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"remove","lines":[" "]},{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"remove","lines":[","]}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":31},"action":"remove","lines":[" type"],"id":65},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"remove","lines":[","]}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":[" "],"id":66},{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["t"]},{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["y"]},{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["p"]},{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":["e"]},{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":[","]}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":[" "],"id":67},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["t"]},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["y"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["p"]},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["e"]},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":[","]}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":68}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["",""],"id":69}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["\t"],"id":70}],[{"start":{"row":14,"column":1},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":["\t"],"id":72}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["\t"],"id":73}],[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["c"],"id":74},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["o"]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["n"]},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["s"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["o"]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["l"]},{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["e"]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["."]},{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["l"]},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["o"]},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["g"]}],[{"start":{"row":15,"column":12},"end":{"row":15,"column":14},"action":"insert","lines":["()"],"id":75}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["b"],"id":76},{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["y"]}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":15},"action":"remove","lines":["by"],"id":77},{"start":{"row":15,"column":13},"end":{"row":15,"column":21},"action":"insert","lines":["bytecode"]}],[{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":[";"],"id":78}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":23},"action":"remove","lines":["\tconsole.log(bytecode);"],"id":79},{"start":{"row":14,"column":1},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["c"],"id":80}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"remove","lines":["c"],"id":81}],[{"start":{"row":14,"column":1},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":82},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["c"]},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["d"]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":["d"],"id":83},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"remove","lines":["c"]}],[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["c"],"id":84},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["o"]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["n"]},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["s"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["o"]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["l"]},{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["e"]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["."]}],[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["l"],"id":85},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["o"]},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["g"]}],[{"start":{"row":15,"column":12},"end":{"row":15,"column":14},"action":"insert","lines":["()"],"id":86}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":15},"action":"insert","lines":["\"\""],"id":87}],[{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["A"],"id":88},{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":["t"]},{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":["t"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"insert","lines":["e"]},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"insert","lines":["m"]},{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["p"]},{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":["t"]},{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["i"]},{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":["n"]},{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["g"]}],[{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"insert","lines":[" "],"id":89},{"start":{"row":15,"column":25},"end":{"row":15,"column":26},"action":"insert","lines":["t"]},{"start":{"row":15,"column":26},"end":{"row":15,"column":27},"action":"insert","lines":["o"]}],[{"start":{"row":15,"column":27},"end":{"row":15,"column":28},"action":"insert","lines":[" "],"id":90},{"start":{"row":15,"column":28},"end":{"row":15,"column":29},"action":"insert","lines":["d"]},{"start":{"row":15,"column":29},"end":{"row":15,"column":30},"action":"insert","lines":["e"]},{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"insert","lines":["p"]},{"start":{"row":15,"column":31},"end":{"row":15,"column":32},"action":"insert","lines":["o"]}],[{"start":{"row":15,"column":31},"end":{"row":15,"column":32},"action":"remove","lines":["o"],"id":91}],[{"start":{"row":15,"column":31},"end":{"row":15,"column":32},"action":"insert","lines":["l"],"id":92},{"start":{"row":15,"column":32},"end":{"row":15,"column":33},"action":"insert","lines":["o"]},{"start":{"row":15,"column":33},"end":{"row":15,"column":34},"action":"insert","lines":["y"]}],[{"start":{"row":15,"column":36},"end":{"row":15,"column":37},"action":"insert","lines":[";"],"id":93}]]},"ace":{"folds":[],"scrolltop":60,"scrollleft":0,"selection":{"start":{"row":23,"column":2},"end":{"row":23,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":57,"mode":"ace/mode/javascript"}},"timestamp":1556074929581,"hash":"2c7bfc94530826ba3ffac968d891621b4e509232"}