initSidebarItems({"constant":[["MOVE_COMPILED_EXTENSION",""],["MOVE_COMPILED_INTERFACES_DIR",""],["MOVE_EXTENSION",""],["SOURCE_MAP_EXTENSION",""]],"enum":[["Pass",""],["PassResult",""]],"fn":[["extension_equals",""],["find_filenames","For each directory in `paths`, it will return all files that satisfy the predicateAny file explicitly passed in `paths`, it will include that file in the result, regardless of the file extension"],["find_move_filenames","For each directory in `paths`, it will return all files with the `MOVE_EXTENSION` found recursively in that directoryIf `keep_specified_files` any file explicitly passed in `paths`, will be added to the result Otherwise, they will be discarded"],["generate_interface_files",""],["is_permitted_char","Determine if a character is permitted character."],["is_permitted_newline_char","Determine if a character is a permitted newline character."],["is_permitted_printable_char","Determine if a character is an allowed eye-visible (printable) character."],["move_check","Given a set of targets and a set of dependencies"],["move_check_and_report","Similar to move_check but it reports it's errors to stderr"],["move_compile","Given a set of targets and a set of dependencies"],["move_compile_and_report","Similar to move_compile but it reports it's errors to stderr"],["move_continue_up_to","Runs the compiler from a previous result until a stopping point. The stopping point is inclusive, meaning the pass specified by `until: Pass` will be run"],["move_parse","Given a set of targets and a set of dependencies, produces a `parser::ast::Program` along side a `CommentMap`. The `sender_opt` is returned for ease of use with `PassResult::Parser`"],["output_compiled_units","Given a file map and a set of compiled programs, saves the compiled programs to disk"],["path_to_string",""],["sanity_check_compiled_units","Runs the bytecode verifier on the compiled units Fails if the bytecode verifier errors"]],"macro":[["unwrap_or_report_errors",""]],"mod":[["cfgir",""],["command_line",""],["compiled_unit",""],["errors",""],["expansion",""],["hlir",""],["interface_generator",""],["ir_translation",""],["naming",""],["parser",""],["shared",""],["typing",""]],"type":[["CommentMap","Types to represent comments."],["FileCommentMap",""],["MatchedFileCommentMap",""]]});