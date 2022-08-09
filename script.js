const data = {
    "abilities": [
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      },
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
    "base_experience": 64,
    "forms": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
      }
    ],
    "height": 7,
    "id": 1,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "moves": [
      {
        "move": {
          "name": "razor-wind",
          "url": "https://pokeapi.co/api/v2/move/13/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          }
        ]
      }
      ],
  
    "name": "Bulbasaur",
    "order": 1,
    "species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "stats": [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "weight": 69
  }
  
  /*Step 1
  Get the height and weight of Pokemon and return them in String format*/
  const heightPk =  data.height.toString();
  const weightPk = data.weight.toString();
  console.log(weightPk);
  
    /* Step 2
  Store the result of Step 1 and again convert height and weight to integer.
  Then calculate Pokemons BMI. Assume that weight and height are in in kg and meters consequently.
  Formula for BMI : BMI = kg/m2 */
  const heightPokemon = Number(heightPk);
  const weightPokemon = Number(weightPk);
  let BMI = weightPokemon / (heightPokemon * heightPokemon);
  BMI = BMI.toFixed(2)
  // console.log(typeof BMI)
  
  /*Step 3
  Store the name of Pokemon to a new variable. Then using new varibale calculate the length (word count) of Pokemons name and make it an upper case. */
  let namePokemon = data.name
  console.log(namePokemon.length);
  namePokemon = namePokemon.toUpperCase();
  console.log(namePokemon);
  
  
  /*Step 4
  Make sure name contains word "bulba" */
  namePokemon = namePokemon.toLowerCase()
  namePokemon.includes('bulba');
  console.log(namePokemon.includes('bulba'));
  
  //indexOf, for loop, search
  /*Step 5
  Now cut first 2 characters of name and store as a new variable. Also get last 2 charaters of name and store as a new variable. At the end add this 2 variables and return a new name that consists of first 2 and last 2 characters of original name.
  HINT: try to use string method */
  let firstTwoLetters = namePokemon.slice(0,2);
  let lastTwoLetters = namePokemon.slice(-2);
  console.log(lastTwoLetters);
  let newName = firstTwoLetters.concat(lastTwoLetters);
  console.log(newName);
  
  /*Step 6
  Now store new name variable into an array. And console to the result. */
  
  const array = [];
  array.push(newName);
  console.log(array);
  
  /*Step 7
  Console log the names of each "type" that is inside types array in original data. Make sure you see "poison" and "grass" as a result. */
  console.log(data.types[0].type.name);
  console.log(data.types[1].type.name);
  
  
  /*Step 8
  Make sure/check abilites is an array type. Abilites can be found from same data object. */
  console.log(typeof data.abilities);
  // console.log(data.abilities.isArray([]));
  
  
  /*Step 9
  From abilities array get the last ability (object) and console the name of it. */
  
  // console.log(data.abilities[data.abilities.length-1].ability.name)
  
  console.log(data.abilities[1].ability.name);
  /*Step 10
  Now take that last ability (object) and again put it back to abilities array. */
  
  // console.log(data.abilities)
  
  
  /*Step 11
  Loop throgh the stats data and console the base_stat values. */
  let statAarray = [];
  for (let i =0; i<data.stats.length; i++){
    statAarray.push(data.stats[i].base_stat);   
  }
  console.log(statAarray);
  
  
  /*Step 12
  Store Step 11 values into new array and filter and console the values that above 47.*/
  let result = statAarray.filter(above47);
  
  function above47(num){
    return num > 47; 
  }
  console.log(result)
  /*Step 13
  Reverse an array that contained base_stat values and return a string combining all these values. */
  
  
  console.log(statAarray.reverse().toString());
  
  
  
  /*Step 14
  From base_stat values array return/shallow copy only 2 first values as an array.*/
  let newArray2 = statAarray.slice(0, 2);
  console.log(statAarray);
  console.log(newArray2);
  
  /*Step 15
  From base_stat values array replace first number with your name.
  HINT: Modify the original array*/
  
  statAarray[0] = 2022
  console.log(statAarray);
  statAarray.splice(0,1, 2022 );
  console.log(statAarray);
  /*Step 16
  From data show avatar, name, height and weight on the DOM.
  HINT: Use innerHTML and src attributes to show them on the DOM */
  console.log(namePokemon);
  document.getElementById("pokemon-name").innerHTML = namePokemon;
  document.querySelector("#info").innerHTML = "Height: " + heightPk + " " + "Weight: " + weightPk;
   
  let pokemonAvatar = document.getElementById("pokemon-avatar");
  pokemonAvatar.src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png";
  
  
  
  