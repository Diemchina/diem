(function() {var implementors = {};
implementors["borrow_graph"] = [{"text":"impl Copy for RefID","synthetic":false,"types":[]}];
implementors["bytecode"] = [{"text":"impl Copy for JoinResult","synthetic":false,"types":[]},{"text":"impl Copy for FunctionVariant","synthetic":false,"types":[]},{"text":"impl Copy for Label","synthetic":false,"types":[]},{"text":"impl Copy for AttrId","synthetic":false,"types":[]},{"text":"impl Copy for SpecBlockId","synthetic":false,"types":[]},{"text":"impl Copy for AssignKind","synthetic":false,"types":[]},{"text":"impl Copy for PropKind","synthetic":false,"types":[]},{"text":"impl Copy for BlockContent","synthetic":false,"types":[]}];
implementors["channel"] = [{"text":"impl Copy for QueueStyle","synthetic":false,"types":[]}];
implementors["compiled_stdlib"] = [{"text":"impl Copy for StdlibScript","synthetic":false,"types":[]}];
implementors["diem_config"] = [{"text":"impl Copy for LeaderReputationConfig","synthetic":false,"types":[]},{"text":"impl Copy for RateLimitConfig","synthetic":false,"types":[]},{"text":"impl Copy for PeerRole","synthetic":false,"types":[]},{"text":"impl Copy for RocksdbConfig","synthetic":false,"types":[]},{"text":"impl Copy for RoleType","synthetic":false,"types":[]}];
implementors["diem_crypto"] = [{"text":"impl Copy for HashValue","synthetic":false,"types":[]},{"text":"impl Copy for PublicKey","synthetic":false,"types":[]}];
implementors["diem_fuzzer"] = [{"text":"impl Copy for FuzzTarget","synthetic":false,"types":[]}];
implementors["diem_key_manager"] = [{"text":"impl Copy for LogEntry","synthetic":false,"types":[]},{"text":"impl Copy for LogEvent","synthetic":false,"types":[]}];
implementors["diem_logger"] = [{"text":"impl Copy for LevelFilter","synthetic":false,"types":[]},{"text":"impl Copy for Key","synthetic":false,"types":[]},{"text":"impl&lt;'v&gt; Copy for Value&lt;'v&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Metadata","synthetic":false,"types":[]},{"text":"impl Copy for Level","synthetic":false,"types":[]},{"text":"impl Copy for SecurityEvent","synthetic":false,"types":[]}];
implementors["diem_network_address"] = [{"text":"impl Copy for IpFilter","synthetic":false,"types":[]}];
implementors["diem_nibble"] = [{"text":"impl Copy for Nibble","synthetic":false,"types":[]}];
implementors["diem_proptest_helpers"] = [{"text":"impl Copy for Index","synthetic":false,"types":[]}];
implementors["diem_state_view"] = [{"text":"impl Copy for StateViewId","synthetic":false,"types":[]}];
implementors["diem_time_service"] = [{"text":"impl Copy for RealTimeService","synthetic":false,"types":[]}];
implementors["diem_types"] = [{"text":"impl Copy for NamedChain","synthetic":false,"types":[]},{"text":"impl Copy for ChainId","synthetic":false,"types":[]},{"text":"impl Copy for EventKey","synthetic":false,"types":[]},{"text":"impl Copy for MempoolStatusCode","synthetic":false,"types":[]},{"text":"impl Copy for ConfigID","synthetic":false,"types":[]},{"text":"impl Copy for Position","synthetic":false,"types":[]},{"text":"impl Copy for SparseMerkleLeafNode","synthetic":false,"types":[]},{"text":"impl Copy for AuthenticationKey","synthetic":false,"types":[]},{"text":"impl Copy for GovernanceRole","synthetic":false,"types":[]},{"text":"impl Copy for Waypoint","synthetic":false,"types":[]}];
implementors["diem_vm"] = [{"text":"impl Copy for LogEntry","synthetic":false,"types":[]}];
implementors["diemdb"] = [{"text":"impl Copy for DbState","synthetic":false,"types":[]}];
implementors["functional_tests"] = [{"text":"impl Copy for Stage","synthetic":false,"types":[]}];
implementors["generate_format"] = [{"text":"impl Copy for Corpus","synthetic":false,"types":[]}];
implementors["invalid_mutations"] = [{"text":"impl Copy for PointerKind","synthetic":false,"types":[]}];
implementors["language_e2e_tests"] = [{"text":"impl Copy for AccountRoleSpecifier","synthetic":false,"types":[]}];
implementors["move_core_types"] = [{"text":"impl Copy for AccountAddress","synthetic":false,"types":[]},{"text":"impl&lt;GasCarrier:&nbsp;Copy&gt; Copy for AbstractMemorySize&lt;GasCarrier&gt;","synthetic":false,"types":[]},{"text":"impl&lt;GasCarrier:&nbsp;Copy&gt; Copy for GasUnits&lt;GasCarrier&gt;","synthetic":false,"types":[]},{"text":"impl&lt;GasCarrier:&nbsp;Copy&gt; Copy for InternalGasUnits&lt;GasCarrier&gt;","synthetic":false,"types":[]},{"text":"impl&lt;GasCarrier:&nbsp;Copy&gt; Copy for GasPrice&lt;GasCarrier&gt;","synthetic":false,"types":[]},{"text":"impl Copy for StatusCode","synthetic":false,"types":[]}];
implementors["move_ir_types"] = [{"text":"impl Copy for Loc","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for Spanned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["move_lang"] = [{"text":"impl Copy for SpecId","synthetic":false,"types":[]},{"text":"impl Copy for Label","synthetic":false,"types":[]},{"text":"impl Copy for TParamID","synthetic":false,"types":[]},{"text":"impl Copy for TVar","synthetic":false,"types":[]},{"text":"impl Copy for UnaryOp_","synthetic":false,"types":[]},{"text":"impl Copy for BinOp_","synthetic":false,"types":[]},{"text":"impl Copy for QuantKind_","synthetic":false,"types":[]},{"text":"impl Copy for Address","synthetic":false,"types":[]},{"text":"impl Copy for Pass","synthetic":false,"types":[]}];
implementors["move_model"] = [{"text":"impl Copy for QuantKind","synthetic":false,"types":[]},{"text":"impl Copy for CodeWriterLabel","synthetic":false,"types":[]},{"text":"impl Copy for ModuleId","synthetic":false,"types":[]},{"text":"impl Copy for NamedConstantId","synthetic":false,"types":[]},{"text":"impl Copy for StructId","synthetic":false,"types":[]},{"text":"impl Copy for FieldId","synthetic":false,"types":[]},{"text":"impl Copy for FunId","synthetic":false,"types":[]},{"text":"impl Copy for SchemaId","synthetic":false,"types":[]},{"text":"impl Copy for SpecFunId","synthetic":false,"types":[]},{"text":"impl Copy for SpecVarId","synthetic":false,"types":[]},{"text":"impl Copy for NodeId","synthetic":false,"types":[]},{"text":"impl Copy for GlobalId","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Copy&gt; Copy for QualifiedId&lt;Id&gt;","synthetic":false,"types":[]},{"text":"impl Copy for VerificationScope","synthetic":false,"types":[]},{"text":"impl Copy for ConditionTag","synthetic":false,"types":[]},{"text":"impl Copy for TypeConstraint","synthetic":false,"types":[]},{"text":"impl Copy for Symbol","synthetic":false,"types":[]},{"text":"impl Copy for PrimitiveType","synthetic":false,"types":[]}];
implementors["move_vm_types"] = [{"text":"impl Copy for NativeCostIndex","synthetic":false,"types":[]}];
implementors["netcore"] = [{"text":"impl Copy for ConnectionOrigin","synthetic":false,"types":[]}];
implementors["network"] = [{"text":"impl Copy for DiscoverySource","synthetic":false,"types":[]},{"text":"impl Copy for NetworkErrorKind","synthetic":false,"types":[]},{"text":"impl Copy for DisconnectReason","synthetic":false,"types":[]},{"text":"impl Copy for ProtocolId","synthetic":false,"types":[]},{"text":"impl Copy for MessagingProtocolVersion","synthetic":false,"types":[]},{"text":"impl Copy for ConnectionId","synthetic":false,"types":[]}];
implementors["short_hex_str"] = [{"text":"impl Copy for ShortHexStr","synthetic":false,"types":[]}];
implementors["storage_interface"] = [{"text":"impl Copy for Order","synthetic":false,"types":[]}];
implementors["test_generation"] = [{"text":"impl Copy for BorrowState","synthetic":false,"types":[]},{"text":"impl Copy for EdgeType","synthetic":false,"types":[]},{"text":"impl Copy for FunctionGenerationContext","synthetic":false,"types":[]}];
implementors["vm"] = [{"text":"impl Copy for ModuleHandleIndex","synthetic":false,"types":[]},{"text":"impl Copy for StructHandleIndex","synthetic":false,"types":[]},{"text":"impl Copy for FunctionHandleIndex","synthetic":false,"types":[]},{"text":"impl Copy for FieldHandleIndex","synthetic":false,"types":[]},{"text":"impl Copy for StructDefInstantiationIndex","synthetic":false,"types":[]},{"text":"impl Copy for FunctionInstantiationIndex","synthetic":false,"types":[]},{"text":"impl Copy for FieldInstantiationIndex","synthetic":false,"types":[]},{"text":"impl Copy for IdentifierIndex","synthetic":false,"types":[]},{"text":"impl Copy for AddressIdentifierIndex","synthetic":false,"types":[]},{"text":"impl Copy for ConstantPoolIndex","synthetic":false,"types":[]},{"text":"impl Copy for SignatureIndex","synthetic":false,"types":[]},{"text":"impl Copy for StructDefinitionIndex","synthetic":false,"types":[]},{"text":"impl Copy for FunctionDefinitionIndex","synthetic":false,"types":[]},{"text":"impl Copy for Visibility","synthetic":false,"types":[]},{"text":"impl Copy for Kind","synthetic":false,"types":[]},{"text":"impl Copy for TableType","synthetic":false,"types":[]},{"text":"impl Copy for SerializedType","synthetic":false,"types":[]},{"text":"impl Copy for SerializedNominalResourceFlag","synthetic":false,"types":[]},{"text":"impl Copy for SerializedKind","synthetic":false,"types":[]},{"text":"impl Copy for SerializedNativeStructFlag","synthetic":false,"types":[]},{"text":"impl Copy for Opcodes","synthetic":false,"types":[]},{"text":"impl Copy for IndexKind","synthetic":false,"types":[]},{"text":"impl Copy for SignatureTokenKind","synthetic":false,"types":[]}];
implementors["x_core"] = [{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for DebugIgnore&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Copy for WorkspaceStatus","synthetic":false,"types":[]}];
implementors["x_lint"] = [{"text":"impl&lt;'l&gt; Copy for PackageContext&lt;'l&gt;","synthetic":false,"types":[]},{"text":"impl Copy for LintLevel","synthetic":false,"types":[]},{"text":"impl&lt;'l&gt; Copy for LintSource&lt;'l&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'l&gt; Copy for LintKind&lt;'l&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()