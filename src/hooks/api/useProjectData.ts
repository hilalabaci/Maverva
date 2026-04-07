import { getSelectedProject } from "../../api/project-api";
import { useUserContext } from "../../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";

export const useProjectData = (projectKey: string | undefined) => {
  const { user, token } = useUserContext();
  return useQuery({
    queryKey: ["project", projectKey, token, user?.Id],
    queryFn: async () => {
      if (!projectKey || !token || !user?.Id)
        throw new Error("Missing project key, token, or user ID");
      const response = await getSelectedProject(projectKey, user.Id, token);
      if (!response.ok) {
        throw new Error("Failed to fetch project data");
      }
      return response.data;
    },
  });
};
