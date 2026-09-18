const std = @import("std");
const DomNode = @import("dom_node.zig");

pub const ElementNode = struct {
    node_type: *const u8,
    children: std.ArrayList(DomNode),
};
