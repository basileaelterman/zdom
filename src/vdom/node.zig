const std = @import("std");

pub const Node = union(enum) {
    empty,
    element_node: ElementNode,
    text_node: TextNode,
};

pub const ElementNode = struct {
    tag: []const u8,
    children: []const Node,
};

pub const TextNode = struct {
    text: []const u8,
};
