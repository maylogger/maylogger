function get_content_of_line(state, line){
  pos = state.bMarks[line] + state.tShift[line];
  max = state.eMarks[line];
  return state.src.substring(pos, max).trim();
}

function find_next_line_index_with_str(state, startLine, endLine, str){
  for(var nextLine = startLine + 1 ; nextLine <= endLine ; nextLine ++ ){
    if(get_content_of_line(state, nextLine) == str){
      return nextLine;
    }
  }
  return undefined;
}

function puyo_block_ruler(state, startLine, endLine, silent) {
  if(get_content_of_line(state, startLine).match(/puyo\s*{/) === null){
    return false;
  }

  line_of_block_end = find_next_line_index_with_str(state, startLine, endLine, "}")
  if(line_of_block_end == "undefined"){
    return false;
  }

  state.line = line_of_block_end + 1;

  token         = state.push('puyo', '', 0);
  token.content = state.getLines(startLine + 1, line_of_block_end, 0, false);
  token.map     = [ startLine, state.line ];

  return true;
}

function get_empty_array(line_length){
  var a = [];
  for(var i = 0; i < line_length ; i++){
    a.push([false, false, false, false, false, false]);
  }
  return a;
}

function puyo_renderer(tokens, idx) {
  var content = tokens[idx].content;
  var lines = content.split("\n");

  while(lines[lines.length-1] === '' || lines[lines.length-1] === '}'){
    lines.pop();
  }

  var keys = {};
  for(var i = 0 ; i < lines.length ; i++){
    for(var j = 0 ; j < 6 ; j ++){
      var char = lines[i][j] || ' ';
      if(char === ' '){
        continue;
      }
      if(keys[char] === undefined){
        keys[char] = get_empty_array(lines.length);
      }
      keys[char][i][j] = true;
    }
  }

  var output = [];
  output.push('<div class="puyo">');
  for(var char in keys){
    output.push('<div class="puyo-' + char + '-container">');
    for(var i = 0 ; i < lines.length ; i++){
      for(var j = 0 ; j < 6 ; j ++){
        if(keys[char][i][j]){
          output.push('<span class="puyo-' + char + '"></span>');
        }else{
          output.push('<span class="puyo-empty"></span>');
        }
      }
      if(i < lines.length - 1){
        output.push('<br/>');
      }
    }
    output.push('</div>');
  }
  output.push('</div>');

  return output.join("\n");
};

module.exports = function puyo_plugin(md) {
  md.block.ruler.after('code', 'puyo', puyo_block_ruler);
  md.renderer.rules.puyo = puyo_renderer;
}