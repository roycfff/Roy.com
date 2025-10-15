"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Plus, Pencil, Trash2, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string | null;
  category: string | null;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface ProjectFormData {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  category: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    description: "",
    url: "",
    imageUrl: "",
    category: "",
  });

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects");
      if (!response.ok) throw new Error("Failed to fetch projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      toast.error("Failed to load projects");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenDialog = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        description: project.description,
        url: project.url,
        imageUrl: project.imageUrl || "",
        category: project.category || "",
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: "",
        description: "",
        url: "",
        imageUrl: "",
        category: "",
      });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingProject
        ? `/api/projects?id=${editingProject.id}`
        : "/api/projects";
      
      const method = editingProject ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save project");

      toast.success(editingProject ? "Project updated!" : "Project created!");
      setIsDialogOpen(false);
      fetchProjects();
    } catch (error) {
      toast.error("Failed to save project");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete project");

      toast.success("Project deleted!");
      fetchProjects();
    } catch (error) {
      toast.error("Failed to delete project");
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderKanban className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading">
              My Projects
            </h2>
          </div>
          <div className="text-2xl font-light text-muted-foreground font-heading mb-4">
            הפרוייקטים שלי
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            A collection of my work in trading, automation, and web development
          </p>
          <Button
            onClick={() => handleOpenDialog()}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Project
          </Button>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No projects yet</p>
            <Button
              onClick={() => handleOpenDialog()}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Project
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Project Image */}
                {project.imageUrl && (
                  <div className="relative h-48 overflow-hidden bg-accent">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.category && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </div>
                    )}
                  </div>
                )}

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-primary/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleOpenDialog(project)}
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(project.id)}
                      className="border-destructive/30 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add/Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px] bg-card border-primary/20">
            <DialogHeader>
              <DialogTitle className="text-primary font-heading text-2xl">
                {editingProject ? "Edit Project" : "Add New Project"}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {editingProject
                  ? "Update your project details below"
                  : "Fill in the details to create a new project"}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title" className="text-foreground">
                    Project Title *
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="e.g., Trading Bot System"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description" className="text-foreground">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Describe your project..."
                    required
                    rows={4}
                    className="bg-background border-border"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="url" className="text-foreground">
                    Project URL *
                  </Label>
                  <Input
                    id="url"
                    type="url"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({ ...formData, url: e.target.value })
                    }
                    placeholder="https://github.com/username/project"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="imageUrl" className="text-foreground">
                    Image URL
                  </Label>
                  <Input
                    id="imageUrl"
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    placeholder="https://images.unsplash.com/photo-..."
                    className="bg-background border-border"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category" className="text-foreground">
                    Category
                  </Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    placeholder="e.g., Trading, Automation, Web Development"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="border-border"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {editingProject ? "Update Project" : "Create Project"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}