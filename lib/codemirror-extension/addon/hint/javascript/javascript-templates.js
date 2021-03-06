(function() {
    var templates = {
        "name": "javascript",
        "context": "javascript",
        "templates": [{
            "name": "for",
            "description": "iterate over array",
            "template": "for (var ${index} = 0; ${index} < ${array}.length; ${index}++) {\n\t${line_selection}${cursor}\n}"
        }, {
            "name": "for",
            "description": "iterate over array with temporary variable",
            "template": "for (var ${index} = 0; ${index} < ${array}.length; ${index}++) {\n\tvar ${array_element} = ${array}[${index}];\n\t${cursor}\n}"
        },
        // {
        //     "name": "forin",
        //     "description": "iterate using for .. in",
        //     "template": "for (var ${iterable_element} in ${iterable}) {\n\t${cursor}\n}"
        // }, {
        //     "name": "do",
        //     "description": "do while statement",
        //     "template": "do {\n\t${line_selection}${cursor}\n} while (${condition});"
        // }, {
        //     "name": "switch",
        //     "description": "switch case statement",
        //     "template": "switch (${key}) {\n\tcase ${value}:\n\t\t${cursor}\n\t\tbreak;\n\n\tdefault:\n\t\tbreak;\n}"
        // },
        {
            "name": "if",
            "description": "if statement",
            "template": "if (${condition}) {\n\t${line_selection}${cursor}\n}"
        }, {
            "name": "ifelse",
            "description": "if else statement",
            "template": "if (${condition}) {\n\t${cursor}\n} else {\n\t\n}"
        }, {
            "name": "elseif",
            "description": "else if block",
            "template": "else if (${condition}) {\n\t${cursor}\n}"
        }, {
            "name": "else",
            "description": "else block",
            "template": "else {\n\t${cursor}\n}"
        },
        //  {
        //     "name": "try",
        //     "description": "try catch block",
        //     "template": "try {\n\t${line_selection}${cursor}\n} catch (e) {\n\t// ${todo}: handle exception\n}"
        // }, {
        //     "name": "catch",
        //     "description": "catch block",
        //     "template": "catch (e) {\n\t${cursor}// ${todo}: handle exception\n}"
        // },
         {
            "name": "function",
            "description": "function",
            "template": "function ${name}(${}) {\n\t${cursor}\n}"
        }, {
            "name": "function",
            "description": "anonymous function",
            "template": "function (${}) {\n\t${cursor}\n}"
        }, {
            "name": "new",
            "description": "create new object",
            "template": "var ${name} = new ${type}(${arguments});"
        }, {
            "name": "Logger info",
            "description": "Logger information",
            "template": "Logger.info(${text}${cursor})"
        }, {
            "name": "Logger debug",
            "description": "Logger debug",
            "template": "Logger.debug(${text}${cursor})"
        }

        // {
        //     "name": "lazy",
        //     "description": "lazy creation",
        //     "template": "if (${name:var} == null) {\n\t${name} = new ${type}(${arguments});\n\t${cursor}\n}\n\nreturn ${name};"
        // }, {
        //     "name": "<code>",
        //     "description": "<code></code>",
        //     "template": "<code>${word_selection}${}</code>${cursor}"
        // }, {
        //     "name": "null",
        //     "description": "<code>null</code>",
        //     "template": "<code>null</code>"
        // }, {
        //     "name": "true",
        //     "description": "<code>true</code>",
        //     "template": "<code>true</code>"
        // }, {
        //     "name": "false",
        //     "description": "<code>false</code>",
        //     "template": "<code>false</code>"
        // }, {
        //     "name": "<pre>",
        //     "description": "<pre></pre>",
        //     "template": "<pre>${word_selection}${}</pre>${cursor}"
        // }, {
        //     "name": "<b>",
        //     "description": "<b></b>",
        //     "template": "<b>${word_selection}${}</b>${cursor}"
        // }, {
        //     "name": "<i>",
        //     "description": "<i></i>",
        //     "template": "<i>${word_selection}${}</i>${cursor}"
        // }, {
        //     "name": "@author",
        //     "description": "author name",
        //     "template": "@author ${user}"
        // },
        // {
        //     "name": "while",
        //     "description": "while loop with condition",
        //     "template": "while (${condition}) {\n\t${line_selection}${cursor}\n}"
        // }
        ]
    };
    CodeMirror.templatesHint.addTemplates(templates);
})();
